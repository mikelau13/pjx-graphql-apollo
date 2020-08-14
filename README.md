# pjx-graphql-apollo

This project is one of the components of the `pjx` application, please check [pjx-root](https://github.com/mikelau13/pjx-root) for more details.

## Dependencies

- [pjx-api-node](https://github.com/mikelau13/pjx-api-node) - the API that this Apollo Server is consuming

For the real world problem, GraphQL is powerful for a more complex infrastructure, such that a company with many differenct API endpoints; however using GraphQL to connect to one and only one API might be overkilled depending on point of view.  

I am using GraphQL here only for demo purpose; or I might add more APIs (self-developed or 3rd party) in the future.


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
