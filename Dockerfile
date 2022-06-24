FROM node:alpine as angular
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
RUN /usr/src/app/node_modules/.bin/ng build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular /usr/src/app/dist/challenge-pulse-bank /usr/share/nginx/html

EXPOSE 80

# docker build -t challenge-pulse-bank
# docker run -p 8081:80 challenge-pulse-bank
