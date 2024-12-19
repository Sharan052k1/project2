 Use the official NGINX image
FROM nginx:alpine

# Copy the website files to the NGINX default directory
COPY . /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]
