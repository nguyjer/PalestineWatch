from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Initialize WebDriver (e.g., for Chrome)
driver = webdriver.Chrome(executable_path='/path/to/chromedriver')

try:
    # Navigate to your website
    driver.get("https://palestinewatch.me")


    assert "Palestine Watch" in driver.title

    # More actions (clicking buttons, filling forms, etc.)
    # submit_button = driver.find_element(By.ID, "submit")
    # submit_button.click()

finally:

    driver.quit()
