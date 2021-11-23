#
FROM node:13-alpine as builder

# install and cache app dependencies
COPY package.json package-lock.json ./
COPY ./ckeditor5 /ckeditor5
RUN npm install && mkdir /my-blog-reactjs && mv ./node_modules ./my-blog-reactjs
WORKDIR /my-blog-reactjs
COPY . .

RUN npm run build