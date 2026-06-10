FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN cp public/stories.json build/

RUN npm install -g serve

EXPOSE 7860

CMD ["serve", "-s", "build", "-l", "7860"]
