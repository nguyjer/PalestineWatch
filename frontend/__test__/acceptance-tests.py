from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest

# SELENIUM TESTS

class TestPalestine(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")

        service = Service(ChromeDriverManager().install())
        cls.driver = webdriver.Chrome(service=service, options=chrome_options)

        cls.driver.maximize_window()

    def setUp(self):
        self.driver.get("https://www.palestinewatch.me")

    def test_title(self):
        assert "Palestine Watch" in self.driver.title

    def test_nav_bar(self):
        nav = self.driver.find_element(By.CLASS_NAME, "navbar")
        assert nav
        foot = self.driver.find_element(By.TAG_NAME, "footer")
        assert foot
        icon = self.driver.find_element(By.CSS_SELECTOR, "a.navbar-brand")
        assert icon
        assert "PalestineWatch" in icon.text


    def test_nav_about(self):
        link = self.driver.find_element(By.CSS_SELECTOR, "a[href='/about']")
        self.assertEqual("About", link.get_attribute("innerHTML"))
        link.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/about")

    def test_nav_news(self):
        link = self.driver.find_element(By.CSS_SELECTOR,"a[href='/news']")
        self.assertEqual(link.get_attribute("innerHTML"), "News")
        link.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/news")

    def test_nav_support(self):
        link = self.driver.find_element(By.CSS_SELECTOR,"a[href='/support-groups']")
        self.assertEqual(link.get_attribute("innerHTML"), "Support Groups")
        link.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/support-groups")

    def test_nav_countries(self):
        link = self.driver.find_element(By.CSS_SELECTOR,"a[href='/countries']")
        self.assertEqual(link.get_attribute("innerHTML"), "Countries")
        link.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/countries")

    def test_nav_home(self):
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/")
        link = self.driver.find_element(By.CSS_SELECTOR, "a[href='/']")
        link.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/")

    def test_news_instance(self):
        self.driver.get("https://www.palestinewatch.me/news")
        news = WebDriverWait(self.driver, 3).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".card"))
        )
        assert news
        assert len(news) >= 3
        first = news[0]
        read_more = first.find_element(By.CLASS_NAME, "btn-light")
        read_more.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/news/229")

    def test_support_instance(self):
        self.driver.get("https://www.palestinewatch.me/support-groups")
        groups = WebDriverWait(self.driver, 3).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".card"))
        )
        assert groups
        assert len(groups) >= 3
        first = groups[0]
        read_more = first.find_element(By.CLASS_NAME, "btn-light")
        read_more.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/support-groups/33")

    def test_country_instance(self):
        self.driver.get("https://www.palestinewatch.me/countries")
        countries = WebDriverWait(self.driver, 10).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".card"))
        )

        assert countries
        assert len(countries) >= 3
        first = countries[0]
        read_more = first.find_element(By.CLASS_NAME, "btn-light")
        read_more.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/countries/92")

    def test_nav_from_instance(self): 
        self.driver.get("https://www.palestinewatch.me/countries/1")
        link = self.driver.find_element(By.CSS_SELECTOR, "a[href='/']")
        assert link
        link.click()
        self.assertEqual(self.driver.current_url, "https://www.palestinewatch.me/")

    def test_about(self):
        self.driver.get("https://www.palestinewatch.me/about")
        members = self.driver.find_elements(By.CSS_SELECTOR, ".card")[0:5]
        assert members
        read_more = members[0].find_element(By.CLASS_NAME, "btn-outline-dark")
        try:
            r = members[0].find_element(By.XPATH, ".//p[contains(text(), 'Responsibilities:')]").text
            assert False
        except:
            assert True
        read_more.click()
        try: 
            r = members[0].find_element(By.XPATH, ".//p[contains(text(), 'Responsibilities:')]").text
            assert True
        except:
            assert False

    def test_search(self):
        self.driver.get("https://www.palestinewatch.me/support-groups")

        search_input = self.driver.find_element(By.CSS_SELECTOR, "input[aria-label='Search']")

        search_button = WebDriverWait(self.driver, 3).until(
            EC.element_to_be_clickable(By.CLASS_NAME, "btn-secondary")
        )

        search_term = "Healthcare"
        search_input.send_keys(search_term)
        search_button.click()

        results = WebDriverWait(self.driver, 3).until(
            EC.presence_of_all_elements_located(By.CSS_SELECTOR, ".card")
        ) 

        assert len(results) > 0 and len(results) < 329
        for result in results:
            self.assertIn(search_term.lower(), result.text.lower())


    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()


if __name__ == "__main__":
    unittest.main()
