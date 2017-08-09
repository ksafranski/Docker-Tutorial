# Introduction

## What Is Docker?

*The Official Explanation:*

> Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight because they don’t need the extra load of a hypervisor, but run directly within the host machine’s kernel. This means you can run more containers on a given hardware combination than if you were using virtual machines. You can even run Docker containers within host machines that are actually virtual machines!

_Source: [Docker Overview - The Docker Platform](https://docs.docker.com/engine/docker-overview/)_

*The Easy Way to Think About It:*

Docker is _like_ (very strong emphasis on "like" here) a virtual machine platform. The big difference being it doesn't need it's own "environment", it runs off the host's kernel. Why is this good?

- Efficient: it only uses what it needs, no big, dumb "fake computer" running
- Multiple Containers: because it sips resources (see above) it can run many containers without provisioning a bunch of resources for each
- Ideal for Deploys: Since the containers act like VM's without all the overhead, they are ideal for scalable deployment environments

## What Can You Do with Docker?

As mentioned above, deployment is a huge benefit, but there's a major feature of Docker that's commonly skimmed over or assumed: Parity.

The phrase "It worked on my machine" is often the beggining of a long process of debugging environment issues and their associated headaches.

Docker alleviates these issues because an application in a container will run the same no matter what system it runs on.

*Parity is a key to why Docker dominates deployments, but it also makes Docker an exceptional tool for developers, especially when working on applications in teams.*

For years, other solutions such as VM's and [Continuous Integration](https://www.thoughtworks.com/continuous-integration) have given teams work-arounds for parity issues. Containerizing applications throughout the entire development lifecycle, through deployment, enables teams to capitalize on the inherent parity.

## Getting Started

Docker runs as an application, so it's as simple as installing via the [Docker Installation Site](https://docs.docker.com/engine/installation/). Once installed and running the command `docker` should be available and list the usage information.

---

**[Next: 1. Docker CLI >>](/1.Docker-CLI)**