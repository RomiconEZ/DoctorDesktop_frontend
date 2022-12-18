#FROM node:14 as client
#
#WORKDIR /app
#
#COPY package.json /app
#
#RUN npm install
#
#COPY . /app
#
#CMD ["npm", "start"]


#FROM node as builder
#
## Create app directory
#WORKDIR /app
#
## Install app dependencies
#COPY package*.json ./
#
#RUN npm ci
#
#COPY . .
#
#RUN npm run build
#
#FROM node:slim
#
## Create app directory
#WORKDIR /app
#
## Install app dependencies
#COPY package*.json ./
#
#RUN npm ci --production
#
#COPY --from=builder /app/dist ./dist
#
#EXPOSE 8080
#CMD [ "node", "dist/index.js" ]



#FROM node:15-alpine AS builder
#
#WORKDIR /app
#
#COPY package.json package.json
#
#RUN npm install
#
#COPY . .
#
#RUN npm run build
#
#FROM nginx:alpine
#
#WORKDIR /usr/share/nginx/html
#
#RUN rm -rf *
#
#COPY --from=builder /app/dist .
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]



FROM nginx
WORKDIR /usr/share/react
RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN rm -r /usr/share/nginx/html/*
RUN cp -a build/. /usr/share/nginx/html
