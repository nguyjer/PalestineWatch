from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time

def fetch_groups():
    try:
                # Set up Selenium options (headless if you don't want a browser window to appear)
        options = Options()
        options.headless = True  # Set to False if you want to see the browser window
        options.add_argument('--disable-gpu')  # Recommended for headless

        # Set up the WebDriver
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=options)

        # Open the webpage
        driver.get("https://uscpr.org/connect-with-a-local-group/")

        # Let the page load fully
        time.sleep(3)  # You may need to adjust the sleep time based on your internet speed

        # Get the fully rendered HTML source
        html = driver.page_source

        # Close the browser
        driver.quit()

        # Parse the HTML with BeautifulSoup
        soup = BeautifulSoup(html, 'html.parser')

        # Scrape the table data as before
        groups = []
        rows = soup.select('.row-hover tr')
        for index, row in enumerate(rows):
            group_name = row.select_one('.column-1').get_text(strip=True) if row.select_one('.column-1') else 'Missing Data'
            group_email = row.select_one('.column-2').get_text(strip=True) if row.select_one('.column-2') else 'Missing Data'
            group_city = row.select_one('.column-4').get_text(strip=True) if row.select_one('.column-4') else 'Missing Data'
            group_state = row.select_one('.column-5').get_text(strip=True) if row.select_one('.column-5') else 'Missing Data'
            group_zip_code = row.select_one('.column-6').get_text(strip=True) if row.select_one('.column-6') else 'Missing Data'
            group_link = row.select_one('.column-3').get_text(strip=True) if row.select_one('.column-3') else 'Missing Data'

            groups.append({
                'id': index,
                'name': group_name,
                'email': group_email,
                'city': group_city,
                'state': group_state,
                'zipCode': group_zip_code,
                'link': group_link,
            })

        return groups

    except Exception as e:
        print("Error fetching data:", str(e))
        return {'error': 'Error fetching data'}
