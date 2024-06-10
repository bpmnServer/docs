# bpmn-server Overview

`bpmn-server` provides a Workflow component based on **Business Process Model and Notation** that can be easily integrated into your application.

As workflow application can outlive Node.js applications, `bpmn-server` has out-of-the-box state presistence and variables, with concurrency across Node.js cluster and process instances
to make them ideal platform to do long running business processes, durable services or scheduled backgound tasks.


bpmnServer has multiple packages working with `bpmn-server`

- bpmn-web 

A web application support all functions of a typical workflow application, in addition **Modeling and Admin tools**

- bpmn-client

A light weight library to provide remote connections to a `bpmn-server` through **API**


## Modeling
`bpmn-web` provides a modeling tool based on `bpmn.io` with customized property panel, no need to edit bpmn files

![](images/Modeler.png)

`bpmn` models can also be imported from other tools.

Typically your application has multiple bpmn models, a model is represented in a bpmn definition (xml).

Each Model is made of various elements, an `element` can be a `node` in the diagram (events/tasks/gateway) or a  `flow`

Models are saved by `bpmn-server` into MongoDB and can be queried [see API.model](api/interfaces/IAPIModel.md)

`bpmn-server` support all bpmn 2.0 elements [see Modeling Support](examples.md)

## Execution
`bpmn-server` is primiraly an execution engine for bpmn models.

Execution is based on the model logic that is enhanced by various extensions that allow scripting and access to your application.

During Execution, Model Listeners and Application Listeners are invoked.

Everytime a model is executed (started), an `instance` is created, and for each `element` that is executed it creates an `item' 

## Datastore

At various stages of execution, instance object with its parts is saved into a datastore (defaults to MongoDB)

Instances and Items can be queried through an API [see API.data](api/interfaces/IAPIData.md)

[For more details about data management](data.md)

### Invoking Execution Engine

You can communicate with the the execution `engine' through an API [see API.engine](api/interfaces/IAPIEngine.md)
 to `start` a Workflow or to `continue` executin of an Item, etc.

[For more details about Invoking Execution Engine](invokation.md)

### Execution logic and scripting
During Execution of the work bpmn-server can invoke custom scripts at various event or call back your business application

[For more details about Execution behaviour](execution.md)

## User Management and Security

`bpmn-server` is relying on the front-end applicaton to authenticate users and to pass user information through the API.

1. Model designer/developr can define assignee, candidateUsers, candidateUserGroups as static string or JavaScript expressions

2. Application fron-end need to pass the implementation of `userService' 
  
3. `bpmnServer` will enforce security rules based on the current user passed by the application

`bpmn-web` Demo Application , provides a complete implementation of users management using Passport and MongoDB.

[For more details about security](security.md)

## Demo Web Application

A Demo Web application `bpmn-web` provides full front-end along with security features to demonstrate and test the capabilities of `bpmn-server`.

The web app provides:
- Presistent Modeling tool, using bpmn.io 
- Model property panel supporting all features of `bpmn-server` , no need to edit bpmn file
- Execution with input form for defined fields

![](images/inputFields.png)

- List of outstanding/recent tasks and workflow
- Viewing of `instance` details

![](images/instance-details1.png)

- View of Model specification
![](images/instance-details2.png)


## Full Demo Web Application

We Provide a full demo @ https://bpmn.omniworkflow.com

## Installation

### Local Install
This package requires Node.js and an access to MongoDB ()
if you don't have MongoDB already installed you can [create a free cloud account here](http://bit.ly/cyd-atlas) or can be [installed locally](https://www.mongodb.com/docs/manual/installation/)

- 1 git clone
```sh
 git clone https://github.com/bpmnServer/bpmn-web.git
 cd bpmn-web
```
- 2 install packages
```sh
 npm install
```
- 3 setup the app
```sh
 npm run setup
```
- 4 Edit .env file to have MongoDB point to your server or free cloud account

```sh
# MongoDB Settings
MONGO_DB_URL=mongodb://0.0.0.0:27017/bpmn
#
```

- 5 Run Setup again to create db objects


```sh
npm run setup
```

Your installation is now complete.

### Starting the server

```sh
 npm run start
```

Console will display:

```{ .text .no-copy }
bpmn-server WebApp.ts version 1.4.0
MongoDB URL mongodb://0.0.0.0:27017/bpmn
db connection open

App is running at http://localhost:3000 in development mode
  Press CTRL-C to stop
```

Use your browser to view the bpmn-server running

### Command Line Interface
<details>
<summary>
bpmnServer provide some basic functionalities using CLI

</summary>

```sh
npm run cli
```
```{ .text .no-copy }

server started..
Commands:
        q       to quit
        s       start process
        lo      list outstanding items
        li      list items
        l       list instances for a process
        di      display Instance information
        i       Invoke Task
        sgl     Signal Task
        msg     Message Task
        d       delete instnaces
        lm      List of Models
        lme     List of Models
        ck      Check locked instnaces
        re      Recover hung processes
        lu      List Users
        spw     Set User Password
        ?       repeat this list
Enter Command, q to quit, or ? to list commands
>
```

</details>
### Docker installation

<details>

<summary>

To install MongoDB, bpmn-server and bpmn-web in on a docker container

</summary>

#### 1. Create a folder , cd to folder

#### 2. Create a `docker-compose.yml` as follows:

```
version: "3.7"
name: bpmn-server
services:
 bpmn-web:
    image: ralphhanna/bpmn-web
    command: sh -c "
        npm run setup &&
        npm run start"
    ports:
      - 3000:3000
    volumes:
      - 'app:/app'      
    depends_on:
      - mongo      
 mongo:
   image: mongo
   ports:
     - 27017:27017
   volumes:
     - mongodb:/data/db
volumes:
  mongodb:
    driver: local
    driver_opts:
      type: 'none'
      o: 'bind'
      device: './mongodb_volume'    
  app:
    driver: local
    driver_opts:
      type: 'none'
      o: 'bind'
      device: './bpmn_server_volume'    

```

#### 3. start the container `docker compose up -d`

</details>


### Remote Client Install

[This is a light-weight package to allow remote access to bpmn-server](./bpmn-client.md)

### Postman 

Postman Collection to invoke bpmn-server API [is available here](https://documenter.getpostman.com/view/11781516/Szzn7wsm)

### to update to latest release

```sh
npm update bpmn-server
```

## Documentation
| Guide | BPMN Features | |
| - | - | - |
| [Invoking Workflows](invokation.md)  | [Service Task](examples/serviceTask.md) | [Error/Escalate Events](examples/error_events.md) |
| [Execution](execution.md)   | [Script Task](examples/scriptTask.md) | [Call Process](examples/callProcess.md) |
| [Scripting](scripting.md)   | [Conditional Flow](examples/conditionalFlow.md) |  [Multi-instances(loop)](examples/loop.md) |
| [Security](security.md)  | [Scripts Listeners](examples/scriptEvents.md) | [UserTask Assignment](security.md) |
| [Data](data.md)  | [Gateways](examples/gateways.md) | [Timers](timers.md) |
| [API Summary](api-summary.md)   | [Multiple Start Events](examples/multiStartEvent.md) | [SubProcess](examples/subProcess.md) |
| [API Summary](api-summary.md)   | [Multiple Start Events](examples/multiStartEvent.md) | [Transactions](examples/transactions.md) |
| [API](api/readme.md)    | [Input Fields](examples/inputFields.md) | [Ad Hoc SubProcess](examples/adHoc.md) |
| [Setup](setup.md)   |  [Throwing/Catching Messages](examples/msg-throw-catch.md) |
| [Application Integration](customization.md)   | [Boundary Events](examples/boundary-events.md) |

# License

This project is licensed under the terms of the MIT license.

# Acknowledgments

The **bpmn-server** resides upon the excellent library [bpmn-io/bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) developed by [bpmn.io](http://bpmn.io/)

The **bpmn-server** is inspired by the library [bpmn-engine](https://github.com/paed01/bpmn-engine)
