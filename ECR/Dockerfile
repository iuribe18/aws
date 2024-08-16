FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y nginx && \
    echo "Hello world from ECS!" | tee /var/www/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]