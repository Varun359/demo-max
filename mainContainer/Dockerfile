# FROM public.ecr.aws/nginx/nginx:latest

# COPY public/index.html /usr/share/nginx/html

# EXPOSE 80



# FROM node:14-alpine

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --production

# COPY . .

# EXPOSE 80

# # Start the application
# CMD ["node", "index.js"]




# Use a minimal Python base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the index.html file into the container
COPY public/index.html /app

# Install Flask
RUN pip install Flask

# Copy your Flask application code (app.py) into the container
COPY app.py /app

# Expose the port your Flask app will run on
EXPOSE 80

# Start the Flask application
CMD ["python", "app.py"]