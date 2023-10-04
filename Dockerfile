FROM node:18-alpine3.17 as node

WORKDIR /tmp/app/

COPY . .

RUN npm ci
RUN npm run build


FROM nginx:1.25.2-alpine
COPY --from=node /tmp/app/build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
