# CONICHI(SMART HOTEL) - Smart checkout Application

## Timeline

```
Total time spent: 16hr 15min
```

This timeline is the way to evaluate, how much time taken to setup the application step by step.

### Application basic setup

```
Date: 12/07/2019
Duration: 1hr
```

- Folder structure
- basic npm dependency
- webpack and dev server
- Hello world application

Here for local development I am using webpack-dev-server which is equivalent of express we can do customization as well.

### Unit Test Setup

```
Date: 12/07/2019
Duration: 45min apx.
```

I can use karma, jasmine, but I find **jest** having reach feature and faster execution.
I am going to use **Jest** which is a best unit test runner.

To work with react components **enzyme** is the best tool out there.

### BDD Setup

```
Date: 12/07/2019
Duration: 30min apx.
```

As I found protractor besically work with Angular, we can do some hack to make it run in react as well. So here I have two choice

- WebdriverIo (Cross browser)
- Cypress (Run in chrome)

Here I am going to use Cypress as a test automation tool.

```
Why I am using cypress?

- First test execution
- Debugging faster
- Developers friendly
- Time travel
- Descriptive commands

```

All the BDD is writen based on STORY no.

### DOCKER SETUP

```
Date: 13/07/2019
Duration: 2hr (Took little bit loger, As I faced some issue with docker setup in windows WSL)
```

As a modern application, DOCKER env setup is most need which enables each team member have same env setup and application will run without any prerequisit other then docker and docker-componse.

- Added **Dockerfile** (Which will help to build the image with right set of tools)
- Added **run.sh** (Which is used as a ENTRYPOINT in docker file and help run multiple operation with one image)
- Added **docker-compose.yml** (Which is creates easy dev environment to run and debug application)

### Design and development based on STORIES.md

```
Please find the time taken in STORIES.md
```

All the stories includes

1. Design
2. Development
3. Unit test
4. BDD
