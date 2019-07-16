# CONICHI(SMART HOTEL) - Smart checkout Application

## Get started

```bash
# Install dependency
npm install

# Start application in devlopment mode
npm start

# TO run Unit test
./node_modules/.bin/jest

# TO run cypress BDD (Visusal mode)
./node_modules/.bin/cypress open

# To run cypress BDD (Headless)
./node_modules/.bin/cypress run


```

## Use with docker-compose (RECOMENDED)

```bash
# Docker compose
npm run docker:compose:build:watch

# Stop docker compose
docker-compose stop

```

## use with docker

```bash
# Create Image
npm run docker:image:build
# watch
npm run docker:run:watch:linux
# build for production
npm run docker:build
# run unit test
npm run docker:test
```

Please find the **TIMELINE.md** to know, how much time it took to build this application and more inside about the application.

Please find the **STORIES.md** to understand, How I have split of the work in small stories and finish the task.
