#base image
FROM node:20.17-alpine

# Set working directory inside the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies using npm
RUN npm ci --prefer-offline --no-audit

# Copy the rest of the application code
COPY . .

EXPOSE 3000

# Starting our application
CMD ["npm", "run","dev"]