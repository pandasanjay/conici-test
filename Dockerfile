FROM node:10

ADD package-lock.json /package-lock.json
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN npm i

WORKDIR /app
ADD . /app

EXPOSE 9000

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]