FROM node:18

WORKDIR /app

COPY package*.json ./

# Install dependencies with relaxed peer deps
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
