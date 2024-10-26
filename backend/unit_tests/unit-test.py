import unittest
from backend import db
from backend.app import app
from backend.models import SupportGroupsModel, NewsModel, CountriesModel

class APITests(unittest.TestCase):

	@classmethod
	def setUpClass(cls):
		cls.app = app
		cls.client = cls.app.test_client()


	def test_news_by_id_fail(self):
		response = self.client.get('/api/news/30')
		assert response
		data = response.get_json()
		self.assertEqual(data['error'], "404 Not Found: News article not found")
		self.assertEqual(response.status_code, 500)

	def test_news_by_id(self):
		response = self.client.get('api/news/237')
		data = response.get_json()
		self.assertEqual(response.status_code, 200)

	def test_news(self):
		response = self.client.get('/api/news')
		assert response
		self.assertEqual(response.status_code, 200)

	def test_countries(self):
		response = self.client.get('/api/countries')
		assert response
		data = response.get_json()
		self.assertEqual(response.status_code, 200)

	def test_countries_by_id(self):
		response = self.client.get('api/countries/20')
		assert response
		data = response.get_json()
		self.assertEqual(response.status_code, 200)

	def test_countries_by_id_fail(self):
		response = self.client.get('api/countries/10000')
		assert response
		data = response.get_json()
		self.assertEqual(response.status_code, 500)

	def test_support(self):
		response = self.client.get('/api/support-groups')
		assert response
		data = response.get_json()
		self.assertEqual(response.status_code, 200)

	def test_support_by_id(self):
		response = self.client.get('api/support-groups/237')
		assert response
		data = response.get_json()
		self.assertEqual(response.status_code, 200)

	def test_support_by_id_fail(self):
		response = self.client.get('/api/support_groups/10000')
		assert response
		data = response.get_json()
		self.assertEqual(response.status_code, 404)

	def test_get_empty(self):
		response = self.client.get('api/all')
		assert response
		self.assertEqual(response.status_code, 404)


if __name__ == "__main__":
	unittest.main()
