FROM node:14.15 AS build
LABEL maintainer="Andres Uzeda <andres.uzeda88@gmail.com>"

RUN npm install -g @angular/cli

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest AS ngi

COPY --from=build /app/dist/peliculas /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80