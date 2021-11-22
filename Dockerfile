#
FROM node:10-alpine as builder

# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm install && mkdir /my-blog-reactjs && mv ./node_modules ./my-blog-reactjs
WORKDIR /my-blog-reactjs/ckeditor5
RUN npm run build

WORKDIR /my-blog-reactjs
RUN npm add file:./ckeditor5
COPY . .

RUN npm run build