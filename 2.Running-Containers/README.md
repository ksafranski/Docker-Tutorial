# Running Containers

The functionality of Docker comes from executing Docker images as containers which can perform a function, start a service, etc.

## The `run` Command

Running docker images (as containers) is done via the [`run`](https://docs.docker.com/v1.11/engine/reference/commandline/run/) command:

```
docker run <repo>/<image>
```

An easy example of this is the following:

```
docker run hello-world
```

The image `hello-world` will be `pull`ed, and then executed, outputting some text in the shell.

### Running Interactive Containers

A core feature of Docker is automation; being able to run pre-configured containers that execute tasks or run services without interaction. However, running containers with the `-it` flag.

> The -it instructs Docker to allocate a pseudo-TTY connected to the container’s stdin; creating an interactive bash shell in the container

```
docker run -it ubuntu
```

The command will run the `ubuntu` image in interactive mode, meaning the container will start, then enter into the shell and allow the user to interact with the container.

Exiting the shell (`exit` + `<return`>) will end the session, and in turn, stop the container.

### Stopped Containers and Cleanup

After exiting, running `docker ps -a` will show that container (not visible without `-a`). This is because the container was stopped, but not removed. The container is not removed because it now has a state (any action performed while the container was running). The image could be `commit`ed and saved, creating a new layer and a new snapshot.

However, typically the action after running a container should be to remove it, preventing a build-up of artifacts. This can be done with the [`rm`](https://docs.docker.com/v1.11/engine/reference/commandline/rm/) command:

```
docker rm <hash|name>
```

*This process can be automated, by simply adding the `--rm` flag to the run command:*

```
docker run --rm <image>
```

After the execution of the image is complete and the container has stopped, the process artifact will automatically be removed.

