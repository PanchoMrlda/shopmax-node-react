# Frontend Dockerfile
FROM node:20-alpine

LABEL org.opencontainers.image.authors="PanchoMrlda"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

## Compiles the React app
#RUN npm run build

# Use a static server like nginx or serve (optional: for production)
# Use CMD ["npm", "start"] for development
CMD ["npm", "start"]
## Example using serve
#RUN npm install -g serve
#CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000
