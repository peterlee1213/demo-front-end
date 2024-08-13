FROM mcr.microsoft.com/devcontainers/typescript-node:20

RUN mkdir /code

CMD [ "tail","-f","/dev/null" ]