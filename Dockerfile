FROM node:10.15.1

RUN npm i -g --silent sequelize-cli

RUN mkdir /api

COPY . /api

WORKDIR /api

ADD .docker/run.sh /run.sh

RUN chmod +x /run.sh

EXPOSE 3000

CMD [ "/run.sh" ]
