# Use the latest Python image
FROM python:latest

# Set the working directory inside the container
WORKDIR /backend

RUN apt-get update \
    && apt-get install -y python3 python3-pip

RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for Chromium
ENV CHROME_BIN=/usr/bin/chromium
ENV CHROME_DRIVER=/usr/bin/chromium-driver

# Install system dependencies and PostgreSQL client libraries
RUN apt-get update && apt-get install -y libpq-dev

# Copy the current directory contents into the container
COPY . /backend

# Copy the .flaskenv file into the container
COPY .flaskenv /backend/.flaskenv

ENV PYTHONPATH=/backend

# Install Python dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000 to the host (Flask default)
EXPOSE 5000

# Use python-dotenv to load variables from .flaskenv
CMD ["flask", "run", "--host=0.0.0.0"]
