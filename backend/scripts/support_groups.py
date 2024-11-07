from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time
from backend import db
from backend.models import SupportGroupsModel
from sqlalchemy.orm import sessionmaker
from flask import Flask 
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException, ElementClickInterceptedException
import requests

def fetch_image_url(group_link):
    try:
        response = requests.get(group_link, timeout=10)
        response.raise_for_status()  # Raise an exception for HTTP errors
        group_soup = BeautifulSoup(response.text, 'html.parser')
        image_tag = group_soup.find('img')
        if image_tag and 'src' in image_tag.attrs:
            print("found image")
            return image_tag['src']
        else:
            return 'No Image Found'
    except Exception as e:
        print(f"Error fetching image for : {str(e)}")
        return 'No Image Found'


def fetch_groups():
    # # with app.app_context():
    #     try:
    #         db.session.query(SupportGroupsModel).delete()
    #         # Set up headless Chrome options
    #         options = Options()
    #         options.headless = True
    #         options.add_argument('--disable-gpu')

    #         # Initialize the WebDriver
    #         service = Service(ChromeDriverManager().install())
    #         driver = webdriver.Chrome(service=service, options=options)

    #         # Open the initial page
    #         driver.get("https://uscpr.org/connect-with-a-local-group/")
    #         time.sleep(3)  # Wait for the page to load
    #         try:
    #             close_button = driver.find_element("css selector", ".sgpb-popup-close-button-3")
    #             close_button.click()
    #             time.sleep(1)  # Wait for the popup to close
    #         except NoSuchElementException:
    #             print("Close button not found. Make sure the page is fully loaded.")
    #         while True:
    #             # Parse page source
    #             html = driver.page_source
    #             soup = BeautifulSoup(html, 'html.parser')
    #             rows = soup.select('.row-hover tr')

    #             with db.session.no_autoflush:
    #                 for index, row in enumerate(rows):
    #                     group_name = row.select_one('.column-1').get_text(strip=True) if row.select_one('.column-1') else 'Missing Data'
    #                     group_email = row.select_one('.column-2').get_text(strip=True) if row.select_one('.column-2') else 'Missing Data'
    #                     group_city = row.select_one('.column-4').get_text(strip=True) if row.select_one('.column-4') else 'Missing Data'
    #                     group_state = row.select_one('.column-5').get_text(strip=True) if row.select_one('.column-5') else 'Missing Data'
    #                     group_zip_code = row.select_one('.column-6').get_text(strip=True) if row.select_one('.column-6') else 'Missing Data'
    #                     group_link = row.select_one('.column-3 a')['href'] if row.select_one('.column-3 a') else 'Missing Data'
    #                     group_image = 'No Image Found'

    #                     # Fetch image from group link
    #                     if group_link != 'Missing Data':
    #                         group_image = fetch_image_url(group_link)

    #                     # Check for duplicates
    #                     existing_group = SupportGroupsModel.query.filter_by(email=group_email, name=group_name).first()
    #                     if existing_group:
    #                         print(f"Skipping duplicate group: {group_name}")
    #                         continue

    #                     # Insert the new group into the database
    #                     new_group = SupportGroupsModel(
    #                         name=group_name,
    #                         email=group_email,
    #                         city=group_city,
    #                         state=group_state,
    #                         zipcode=group_zip_code,
    #                         link=group_link,
    #                         url_image=group_image,
    #                         newsId=None,
    #                         countryId=None
    #                     )

    #                     db.session.add(new_group)

    #                 db.session.commit()

    #             # Locate and click the "Next" button
    #             try:
                    
    #                 next_button = WebDriverWait(driver, 10).until(
    #                     EC.element_to_be_clickable((By.CLASS_NAME, "paginate_button.next"))
    #                 )
    #                 driver.execute_script("arguments[0].scrollIntoView();", next_button)
    #                 time.sleep(0.5)  # Wait for scroll to complete
    #                 if next_button.get_attribute("aria-disabled") == "true":
    #                     print("Next button is disabled. Exiting loop.")
    #                     break
    #                 driver.execute_script("arguments[0].click();", next_button)
    #                 time.sleep(3)  # Wait for the new page to load
    #                 print("Navigated to the next page.")
    #             except (TimeoutException, NoSuchElementException):
    #                 print("No more pages to load or 'Next' button not found.")
    #                 break

    #     except Exception as e:
    #         print("Error fetching data:", str(e))
    #         db.session.rollback()
    #     finally:
    #         driver.quit()
    # Fetch all groups from the database
    all_groups = SupportGroupsModel.query.all()

    # Loop over each group to update the `groupImage` field
    for group in all_groups:
    # Only proceed if the group has a valid link
        if group.link != 'Missing Data' and group.link:
            if group.link.startswith("http://") or group.link.startswith("https://"):
                final_link = group.link
            else:
                final_link = f"https://{group.link}"
            new_image_url = fetch_image_url(final_link)
            group.url_image = new_image_url  # Update the image URL

    # Commit all changes to the database at once
    db.session.commit()
    print("All group images have been updated.")
