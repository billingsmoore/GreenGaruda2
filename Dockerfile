FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Copy stories.json to build directory
RUN cp public/stories.json build/

# Copy server.js to serve the app
COPY server.js .

EXPOSE 7860

CMD ["node", "server.js"]
