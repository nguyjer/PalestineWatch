run:
	cd ./nextjs-palestinewatch && npm install && npm run dev
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
	-docker pull nguyjer/palestine_watch
	docker run --rm -i -t nguyjer/palestine_watch
