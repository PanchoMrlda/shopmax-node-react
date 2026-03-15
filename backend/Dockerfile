# Backend Dockerfile
FROM node:20-alpine

LABEL org.opencontainers.image.authors="PanchoMrlda"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
