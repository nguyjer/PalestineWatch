from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time
from backend import db  
from backend.models import SupportGroupsModel
from sqlalchemy.orm import sessionmaker

def fetch_groups():
    try:
        options = Options()
        options.headless = True
        options.add_argument('--disable-gpu')  

        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=options)

        driver.get("https://uscpr.org/connect-with-a-local-group/")
        time.sleep(3)

        html = driver.page_source
        driver.quit()

        soup = BeautifulSoup(html, 'html.parser')
        rows = soup.select('.row-hover tr')

        with db.session.no_autoflush:  # Prevent autoflush during this block
            for index, row in enumerate(rows):
                group_name = row.select_one('.column-1').get_text(strip=True) if row.select_one('.column-1') else 'Missing Data'
                group_email = row.select_one('.column-2').get_text(strip=True) if row.select_one('.column-2') else 'Missing Data'
                group_city = row.select_one('.column-4').get_text(strip=True) if row.select_one('.column-4') else 'Missing Data'
                group_state = row.select_one('.column-5').get_text(strip=True) if row.select_one('.column-5') else 'Missing Data'
                group_zip_code = row.select_one('.column-6').get_text(strip=True) if row.select_one('.column-6') else 'Missing Data'
                group_link = row.select_one('.column-3').get_text(strip=True) if row.select_one('.column-3') else 'Missing Data'
                group_image = 'No Image Found'

                if group_link != 'Missing Data':
                    try:
                        driver = webdriver.Chrome(service=service, options=options)
                        driver.get(group_link)
                        time.sleep(3)

                        group_html = driver.page_source
                        driver.quit()

                        group_soup = BeautifulSoup(group_html, 'html.parser')
                        image_tag = group_soup.find('img')
                        if image_tag and 'src' in image_tag.attrs:
                            group_image = image_tag['src']

                    except Exception as e:
                        print(f"Error fetching image for {group_name}: {str(e)}")
                        
                existing_group = SupportGroupsModel.query.filter_by(email=group_email, name=group_name).first()

                if existing_group:
                    print(f"Skipping duplicate group: {group_name}")
                    continue

                # Insert the new group directly into the database
                new_group = SupportGroupsModel(
                    name=group_name,
                    email=group_email,
                    city=group_city,
                    state=group_state,
                    zipcode=group_zip_code,
                    link=group_link,
                    url_image=group_image,
                    newsId=None,
                    countryId=None
                )

                db.session.add(new_group)

            db.session.commit()

    except Exception as e:
        print("Error fetching data:", str(e))
        db.session.rollback()
