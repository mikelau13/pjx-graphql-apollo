# pjx-graphql-apollo


## Project Tools

- [TypeScript](https://www.typescriptlang.org/index.html)
- [graphQL](https://graphql.org/learn/)
- [apollo-server](https://www.apollographql.com/docs/apollo-server/)

## Environment Dependencies

Ensure you have [Docker](https://docs.docker.com/) installed and running on you local machine.

- [Install Docker for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Install Docker for Windows](https://docs.docker.com/docker-for-windows/)
- [Install Docker for Ubuntu](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04)

## Local Development (docker)

Run the following in the command line from the root of the pjx-graphql-apollo project.  

```bash
docker-compose up
```

This will run a local graphql server in a docker container, can be reached at [localhost:4000](http://localhost:4000).


To stop your local server (container) run the following:

```bash
docker-compose down
```

## Running bash commands from the container

Run all bash(terminal) related commands from the `pjx-graphql-apollo-dev` container in the interactive terminal: 

```bash
# run from your computer's terminal
npm run docker:exec
```

If successful you should see the following in your termianl:

```bash
# This is showing me logged in as root user.
root@a0e9e0dd887b:/usr/api
```

By default your working directory should be the **graphql** server root directory `usr/api`.

To exit the interactive terminal run the following:

```bash
exit
```
