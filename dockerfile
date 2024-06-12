from node:latest

# RUN npm install -g yarn

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx prisma generate

EXPOSE 3003

CMD [ "yarn", "start" ]