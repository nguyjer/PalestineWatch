run:
	cd ./frontend && npm install && npm i bootstrap@5.3.3 && npm run dev
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
	git commit -m "Created MakeFile"
	git push
	git status

# run docker
docker:
	-cd ./frontend && docker pull nguyjer/palestine_watch
	cd ./frontend && docker run --rm -i -p 3000:3000 -t -v $$(pwd):/app nguyjer/palestine_watch

build:
	cd ./frontend && npm install && npm run build
