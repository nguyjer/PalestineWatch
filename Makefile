run:
	cd ./frontend && npm ci && npm run dev

#add all then show status
add:
	git add -A
	git status

#pull from repo
pull:
	git pull
	git status

#push to repo
push:
	git add .
	git commit -m "added backend directory"
	git push
	git status

# run docker
docker:
	- docker pull nguyjer/palestine_watch
	docker run --rm -i -p 3000:3000 -t -v $$(pwd):/app nguyjer/palestine_watch

build:
	npm ci && npm run dev && npm ci && npm run build

backendStartWindows:
	cd backend
	python -m venv venv
	venv/Scripts/activate

backendInstallWindows:
	pip install requests
	pip install flask
	pip install Flask-CORS
	pip install python-dotenv
	pip install psycopg2-binary
	pip install selenium
	pip install beautifulsoup4
	pip install webdriver_manager