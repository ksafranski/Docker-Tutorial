**[<< Previous: 1. Docker CLI](/1.Docker-CLI)**

---

# Running Containers

The functionality of Docker comes from executing Docker images as containers which can perform a function, start a service, etc.

## The `run` Command

Running docker images (as containers) is done via the [`run`](https://docs.docker.com/v1.11/engine/reference/commandline/run/) command:

```
docker run <repo>/<image>
```

#### :arrow_forward: Example Run Command

```
docker run hello-world
```

The image `hello-world` will be `pull`'d, and then executed, outputting some text in the shell.

### Running Interactive Containers

A core feature of Docker is automation; being able to run pre-configured containers that execute tasks or run services without interaction. However, running containers with the `-it` flag allows for interaction with the running container.

> The -it instructs Docker to allocate a pseudo-TTY connected to the container’s stdin; creating an interactive bash shell in the container

#### :arrow_forward: Example Interactive Run

```
docker run -it ubuntu
```

The command will run the `ubuntu` image in interactive mode, meaning the container will start, then enter into the shell and allow the user to interact with the container.

Exiting the shell (`exit` + `<return`>) will end the session, and in turn, stop the container.

### Stopped Containers and Cleanup

After exiting, running `docker ps -a` will show that container (not visible without `-a`). This is because the container was stopped, but not removed. The container is not removed because it now has a state (any action performed while the container was running). The image could be `commit`'ed and saved, creating a new layer and a new snapshot.

However, typically the action after running a container is to remove it, preventing a build-up of artifacts. This can be done with the [`rm`](https://docs.docker.com/v1.11/engine/reference/commandline/rm/) command:

```
docker rm <hash|name>
```

*This process can be automated, by simply adding the `--rm` flag to the `run` command:*

```
docker run --rm <image>
```

After the execution of the image is complete and the container has stopped, the process artifact will automatically be removed.

### Volumes

Mounting volumes allows the container to interact with the host machine's file system at a specific mount-point:

```
docker run -v <local-path>:<mount-point> <image>
```

#### :arrow_forward: Example Volume Mount

```
docker run -it --rm -v $PWD:/foo ubuntu
```

The command will run the container and mount the current working directory to the container's `/foo`. Once the container is started it is possible to `cd /foo`, then `ls` to see the contents.

This works like a standard mount in a Unix/Linux system, and any changes made on either the host or guest machines will be reflected in both places.

### Expose (Ports)

Exposing ports is a common practice as it allows containers to connect to other services, and other services to connect to containers:

```
docker run -p <local-port>:<container-port>
```

#### :arrow_forward: Example Port Expose

```
docker run --rm -p 8080:80 httpd
```

The command will pull and run Apache's HTTP service with the guest's port `80` exposed through the host's port `8080`. This can be seen by navigating to `http://localhost:8080` in a web browser.

### Environment Variables

Enviornment variables allow configuration for any services or applications to be passed to a container:

```
docker run -e <NAME>=<VALUE> <image>
```

#### :arrow_forward: Example Environment Variable

```
docker run -it --rm -e FOO=bar ubuntu
```

The command will set the environment variable `FOO` to `bar` and start the container. The value can be seen by running `echo $FOO` inside the container's interactive session.

### Running Commands

By passing in commands via the `run` command, Docker will execute a command inside of the container:

```
docker run <image> <command>
```

#### :arrow_forward: Example Command Execution

```
docker run --rm ubuntu echo "hello world"
```

The command will start the container, print `hello world` and then exit the container.

---

**[Next: 3. Dockerfiles >>](/3.Dockerfiles)**