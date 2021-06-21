## == npm 版本 ==

# Base image
FROM node:alpine
# AUTHOR
LABEL AUTHOR = "TOM" \
  EMAIL = "TOM@TEST.ME"
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
EXPOSE 30001/tcp
# Bundle app source
COPY . /usr/src/app
CMD [ "npm", "start" ]

