**[<< Previous: 2. Running Containers](/2.Running-Containers)**

---

# Working With Dockerfiles

While one way to create Docker images is to `commit` containers and push to a repo, the most widely accepted method is to utilize a [Dockerfile](https://docs.docker.com/engine/reference/builder/)

Dockerfiles are configurations which instruct an image build. They are easily maintainable and can be shared, forked, resused, etc.

A Dockerfile is made up of a series of commands which `build` to create an image.

**A full list of available commands is available in the [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/).**

## The Base - `FROM`

The [`FROM`](https://docs.docker.com/engine/reference/builder/#from) command specifies a base image to use. Containers use a base image which can be as simple as an Operating System or as complex as a highly configured service image to build upon.

```
FROM <image>
```

## Including Files and Directories - `COPY`

A container often requires files like configurations, or an entire application. The [`COPY`](https://docs.docker.com/engine/reference/builder/#copy) command allows for instructing the build to include files in the final image.

```
COPY <src-path> <destination-path>
```

## Setting the Workind Directory - `WORKDIR`

A container will run in the root unless specified to do otherwise. The [`WORKDIR`](https://docs.docker.com/engine/reference/builder/#workdir) command sets the current working directory, inside the container, for an image.

```
WORKDIR <path>
```

## Running Setup Commands - `RUN`

Often times it is neccesary to run setup commands, install dependencies, etc. The [`RUN`](https://docs.docker.com/engine/reference/builder/#run) command allows these commands to be executed during build.

```
RUN <command(s)>
```

## Configuring Environment Variables - `ENV`

Environment variables often times instruct applications how they should run. Environment variables can be set in the image via the [`ENV`](https://docs.docker.com/engine/reference/builder/#env) command.

```
ENV <KEY>=<value>
```

## Exposing Ports - `EXPOSE`

Containers often times need to expose ports to communicate with other services, or present an accessible API. The [`EXPOSE`](https://docs.docker.com/engine/reference/builder/#expose) command allows these ports to be defined in the Dockerfile.

```
EXPOSE <port>
```

## Instructing the Container's Execution - `ENTRYPOINT`

When an image is run it needs to be instructed on what to execute such as a service, application, etc. The [`ENTRYPOINT`](https://docs.docker.com/engine/reference/builder/#entrypoint) command is used to designate what should run when the container is started.

```
ENTRYPOINT [ <command>, <param>, <param>, ... ]
```

## Building a Dockerfile

The [`build`](https://docs.docker.com/engine/reference/commandline/build/) command runs the Dockerfile configuration and builds a new image. The simple format for executing this command is as follows:

```
docker build <path-to-dockerfile> -t <name>
```

Often times this can be easily run inside of the same directory as the Dockerfile using the following:

```
dockerfile build . -t <name>
```

## Example Dockerfile

The below example is available in the [`./example`](/3.Dockerfiles/example) directory along with a small [NodeJS](http://nodejs.com) application that exposes a service on port `8080` by default:

```
FROM mhart/alpine-node:6

COPY ./app /app

WORKDIR /app

RUN npm install

ENV PORT=8080

EXPOSE 8080

ENTRYPOINT [ "node", "index.js" ]
```

### Build Image

To build the image, `cd` into the `./example` directory, then run the following:

```
docker build . -t demo-app
```

### Running the Image

Once built the image can be run using the following:

```
docker run --rm demo-app
```

The container will run the application which is accessible at `http://localhost:8080`. The application will echo `Hello!!!`, and supports an optional URL parameter which can be sent via `http://localhost:8080/<name>` and will echo `Hello <name>!!!`.

### Stopping the Container

The container will run indefinetly, to stop, open another shell (with access to Docker) and run `docker ps` to find the ID of the container. Then run the following:

```
docker stop <id>
```

_Note: Commands in docker referencing the ID of a container do not require the full ID; passing the first 5 or 6 characters will be enough for Docker to recognize the ID_

---

**[Next: 4. Hosting >>](/4.Hosting)**