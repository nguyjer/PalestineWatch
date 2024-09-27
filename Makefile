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
	-cd ./nextjs-palestinewatch && docker pull nguyjer/palestine_watch
	cd ./nextjs-palestinewatch && docker run --rm -i -p 3000:3000 -t -v $$(pwd):/app nguyjer/palestine_watch
