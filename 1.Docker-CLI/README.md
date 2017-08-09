**[<< Previous: 0. Introduction](/0.Introduction)**

---

# The Docker CLI

The Docker Client refers to the command-line interface for interacting with the Docker daemon.

## Images

Docker images are the "snapshots" which are pre-configured containers that can be run to perform tasks or start services.

### Naming and Tags

In the below examples, the convention `<repo>/<image>` is used, however, local images (and even certain remotes) may only be referred to by their `<image>`.

Images can be called by a full `<repo>/<image>:<tag>` convention, however, most often the tag desired is `latest`, which is what Docker will `pull` by default.

The `latest` tag is a bit confusing as it would _seem_ to indicate "the latest version", however, that's not always the case. There is a great article about [confusion around the `latest` tag](http://container-solutions.com/docker-latest-confusion/).

Also, it is worth noting that using the `latest` will not update that image automatically. If something changes on the image it must be `pull`'d again in order to update the layers.

### Listing Local Images

To view all images available locally, the [`images`](https://docs.docker.com/v1.11/engine/reference/commandline/images/) command is used:

```
docker images
```

The command will return a listing with the following format:

```
REPOSITORY          TAG         IMAGE ID      CREATED       SIZE
<repo>/<name>       <tag>       <hash>        <time>        <size> MB
```

### Pulling an Image

To pull an image (download locally) the [`pull`](https://docs.docker.com/v1.11/engine/reference/commandline/pull/) command can be used:

```
docker pull <repo>/<name>
```

The command will pull the specified image and its layers which will then be available locally, and can be viewed in the `docker images` list.

### Deleting an Image

As Docker images can build up quickly, they can be removed using the [`rmi`](https://docs.docker.com/v1.11/engine/reference/commandline/rmi/) command:

```
docker rmi <repo>/<name>
```

The command will remove the image, and all layers, from local.

## Processes

When images are [`run`](/2.Running-Containers) they produce an entry in the Docker processes.

### Listing Docker Processes

Processes can be viewed using the [`ps`](https://docs.docker.com/v1.11/engine/reference/commandline/ps/) command:

```
docker ps
```

The command will return a listing with the following format:

```
CONTAINER ID   IMAGE      COMMAND    CREATED   STATUS      PORTS         NAMES
<hash>         <image>    <command>  <time>    <time>      <ports>       <names>
```

This view shows *running* containers. Containers, not long-running, can be shown using the `-a` (all) flag. This will show containers which were run, have stopped, but have not been removed.

---

**[Next: 2. Running Containers >>](/2.Running-Containers)**