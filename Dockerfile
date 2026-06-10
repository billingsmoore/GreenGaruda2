FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/build ./build
COPY public/stories.json ./build/

EXPOSE 7860

CMD ["serve", "-s", "build", "-l", "7860"]
