**[<< Previous: 4. Hosting](/4.Hosting)**

---

# Docker Utilities and Tools

Docker has a simple, and fairly intuitive, command-line interface which allows for working with the system easily. However, there are a number of tasks which can be automated, and tools that allow for managing environments much more easily.

Below are some scripts and tools to help make working with Docker.

**A much more complete and detailed list of Docker resources can be found at [github:veggiemonk/awesome-docker](https://github.com/veggiemonk/awesome-docker).**

## Keeping the Docker Environment Clean

Docker maintains a lot of artifacts between images and container layers, volumes, etc. Manually cleaning up after Docker can be a large task if used frequently.

One way to automate cleanup is with the following script which can be run as needed, or as a Cron:

```sh
docker rm -v $(docker ps -a -q -f status=exited)

docker rmi $(docker images -f "dangling=true" -q)

docker run -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker:/var/lib/docker --rm martin/docker-cleanup-volumes
```

A [full explanation of the cleanup script](http://blog.yohanliyanage.com/2015/05/docker-clean-up-after-yourself/) gives a run-down of the steps and their importance.

## Managing Docker Environments

When managing larger Docker environments, the command-line interface becomes error-prone and overly verbose. There are a number of tools to assist in developing configurations to run these larger environment.

### Docker-Compose

[Docker-Compose](https://docs.docker.com/compose) is self-described as:

> [...] a tool for defining and running multi-container Docker applications

Compose uses YAML configuration file, in conjunction with a base Dockerfile, to construct specifications for environments.

The use of Compose revolves around creating instances that start by simply running `compose up`, starting the environment and then running until exit, or instructed to exit.

**[Example NodeJS App with Docker-Compose](https://blog.codeship.com/using-docker-compose-for-nodejs-development/)**

### Binci

[Binci](https://github.com/binci/binci) is a tool designed for running environments similar to Compose. The main difference is its focus on light-weight, task-based ephemeral workflows. Binci is described as:

> Binci is a utility that allows you to easily containerize your development workflow using Docker. Simply put, it's like having a cleanroom for all of your development processes which contain services (like databases) without needing to setup and maintain these environments manually.

Binci's task-oriented approach is geared toward local development; allowing for simple management of ephemeral tasks like testing, linting, application builds, etc.

**[Example NodeJS Project with Binci](https://github.com/binci/binci/tree/master/test/project)**