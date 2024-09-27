#base image
FROM node:20.17-alpine

WORKDIR /nextjs-palestinewatch

# Installing dependencies
COPY package.json /nextjs-palestinewatch
RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application
CMD ["npm", "run","dev"]