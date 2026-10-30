FROM node:18-alpine
LABEL maintainer="Muhammad Shahzaib Rafaqat" description="DevOps Node.js Express API"
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]