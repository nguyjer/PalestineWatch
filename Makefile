run:
	cd frontend && npm ci && npm run dev
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
	git commit -m "adjusted MakeFile"
	git push
	git status

# run docker
docker:
	- docker pull nguyjer/palestine_watch
	docker run --rm -i -p 3000:3000 -t -v $$(pwd):/app nguyjer/palestine_watch

build:
	cd frontend && npm ci && npm run build
