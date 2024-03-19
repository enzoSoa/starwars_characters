# Star Wars 

This project has been configured with node 18 and pnpm 8.6.1

## Start this application

First start the postgres db by using docker-compose : 

```
docker-compose up -d
```

Then make sure you've installed all the node dependencies by running (at project root) :
```
pnpm install
```

And finally start the backend and the frontend in 2 separate shell using :

```
pnpm -F frontend dev
```
and

```
pnpm -F backend start:dev
```
