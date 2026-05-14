FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY index.js .
COPY index.html .
COPY faaa.mp3 .
EXPOSE 3000
CMD ["node", "index.js"]