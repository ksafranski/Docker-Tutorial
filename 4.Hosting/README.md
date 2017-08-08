**[<< Previous: 3. Dockerfiles](/3.Dockerfiles)**

---

# Hosting Docker Images

The most common way to host Docker images is via [DockerHub](https://hub.docker.com/). DockerHub is maintained by Docker, so when logged into Docker CLI (`docker login`) with a DockerHub account, it is possible to [`commit`](https://docs.docker.com/engine/reference/commandline/commit/) and  [`push`](https://docs.docker.com/engine/reference/commandline/push/) images.

However, more commonly, "automated builds" are utilized as they can connect to Git repositories (such as Github and Bitbucket) and will build images when triggered by a webhook after a commit has been pushed.

Using automated builds with Dockerfiles allows for easier tracking of changes as commiting an image directly will only show the layer history, versus a Dockerfile change history which can be easily read.

## Creating an Automated Build

A simple and common method is to connect to Github, which will be the process outlined in the following steps:

1. In DockerHub click `Create`, then select `Create Automated Build`
2. Select `Create Auto-Build - Github`, then navigate to, and select, the repository where the Dockerfile is maintained
3. Create the Automated Build by ensuring the fields are populated for `Name` and `Short Description` and click `Create Build`
4. The build has been created, now navigate to the `Build Settings` tab
5. Under `Build Settings` different builds can be added by supplying their `Name`, `Dockerfile Location` and `Tag`
6. Once a build is created, the build can be `Triggered` by clicking the button (_Note: you must save any build settings before tiggering a build_)
7. Under the `Build Details` tab, the current build(s) can be monitored. This currently is not automated in the UI, so the page must be refreshed to see active changes in build status


## Using and Automated Build

As highlighted in earlier sections, once the build is complete, the image can be `pull`'d via `docker pull <repo>/<image>:<tag>`.

Additionally, on `run`, if an image does not exist locally it will be `pull`'d automatically.

---

**[Next: 5. Utilities and Tools >>](/5.Utils)**