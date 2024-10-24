#base image
FROM node:20.17-alpine

# Set working directory inside the container
WORKDIR /frontend

# Install a specific version of npm
RUN npm install -g npm@7.20.0

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json /frontend/

# Install dependencies using npm
RUN npm install --prefer-offline --no-audit

# Copy the rest of the application code
COPY . /frontend

# Build the Next.js project
RUN npm run build

# Expose the default Next.js port
EXPOSE 3000


# Starting our application
CMD ["npm", "run","dev"]