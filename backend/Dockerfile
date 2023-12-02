FROM node

WORKDIR /server

COPY package-lock.json package-lock.json
COPY package.json package.json
RUN ["npm","i"]

COPY . .

CMD [ "npm","start" ]