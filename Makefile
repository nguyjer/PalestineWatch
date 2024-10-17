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
	docker-compose up --build

build:
	npm ci && npm run dev && npm ci && npm run build
