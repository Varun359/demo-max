FROM nginx:latest

COPY nginx-reverse-proxy.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]