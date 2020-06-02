## Config nodemon

npm install --save-dev nodemon


## Config typescript

npm install -g typescript

> **NOTE:** Might need to set permissions first time installing global library

```bash
sudo chown -R $(whoami) /usr/local
```

npm install ts-node --save-dev


## Config docker compose (already installed docker)

sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version


## Config Apollo Server
npm install apollo-server graphql


Try a simple query on the playground:

```
{
  books{
    title
  }
}
```