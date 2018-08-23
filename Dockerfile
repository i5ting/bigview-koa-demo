FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:3.11.3

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY package.json /usr/src

RUN npm i --production

# RUN npm i --production --registry=https://registry.npm.taobao.org

COPY . /usr/src/

# RUN npm run assets

EXPOSE 3000

CMD npm start