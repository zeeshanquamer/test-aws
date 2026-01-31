FROM node:24-alpine

WorkDIR /

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build || echo "No build step"

EXPOSE 5000

CMD ["npm", "start"]

