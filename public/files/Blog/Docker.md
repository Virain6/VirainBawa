# Contents

1. [What is Docker?](#what%20is%20docker?)
2. [Simple Setup](#how%20to%20set%20it%20up%20simple?)
3. [Advanced Setup](#how%20to%20set%20up%20advanced%20docker)
   1. [Dockerfile](#docker%20file)
   2. [Create the Image](#create%20the%20image)
   3. [Creating the Container](#creating%20the%20container)
   4. [Running Docker](#running%20docker)
   5. [Open On VSCode](#open%20on%20vscode)
   6. [Copy Files](#copy%20files)
4. [Topic](#topic)
5. [References](#references)

# What is Docker?

Docker is a **containerization platform** that allows developers to package applications and their dependencies into lightweight, portable **containers**. These containers can run on **any system** that has Docker installed, ensuring consistency across different environments.

- These containers act like **micro computers** each with there own operating systems and isolated cpu processes, memory and network resources.

- Docker is a form of **virtualization** but differs as **Virtual Machines** as resources are shared with the host. This allows you to run many docker containers where you could perhaps only run a few VM's Docker communicates natively with the system kernel bypassing the middle man in linux machines.

# How to set it up simple?

You begin with a **docker file** which can be built into a **docker image** which can be run as a **docker container**. **_(you can just pull a premade image from the DockerHub, instructions below)_**

**Install docker**

- from the web install docker

**Docker file**

- A simple text document
- Instructs how the docker image will be built
  **Set up**
- Select a base image to start with using the from key which can be found on docker Hub (Ubuntu is a widely used one)
  _Example_

```docker
FROM ubuntu:16.04
```

Run commands such as downloading, installing and running your software
_Example_

```docker
RUN echo "Thank you"
```

**Build the Image**

- navigate to the folder where you have the dockerfile and type the following command

```docker
docker build -t myDocker .
```

- **docker build** is a command to create a new image
- **-t** is the option to provide the image tag name
- **myDocker** is just a random name you can select anything
- The **dot (.)** tells docker too look for the docker file in the current directory.

- verify build using:

```docker
docker images
```

- now your built image can run a container of that image or push it to the cloud to share

**Pull a premade image**

- Use the pull method and pull from DockerHub
- you may also include a tag if available which could specify version, other wise the latest version will be pulled

```docker
docker pull ubuntu
```

**Run a Docker**

```docker
docker run myDockerImage
```

- has many options but simple method
  - Ex: **-d** detached mode

view running containers using:

```docker
docker container ls
```

# How to set up advanced docker

### Docker file

- create a file and nam it dockerfile
- add code like the following below

```docker
FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    build-essential \
    manpages-dev \
    vim \
    nano \
    iputils-ping \
    inetutils-traceroute \
    iproute2 \
    openssh-server \
    sudo \
    curl telnet dnsutils vim

RUN useradd -m student
RUN echo "student:password" | chpasswd
RUN echo "root:password" | chpasswd
RUN adduser student sudo
RUN usermod -aG sudo student
RUN echo "student ALL=(ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers

RUN mkdir /run/sshd \
    && chown root:22 /run/sshd

USER student
RUN mkdir /home/student/lab-work

RUN sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
EXPOSE 22
WORKDIR /home/student/lab-work
CMD sudo /usr/sbin/sshd -D && /bin/bash
```

**Breakdown**

```docker
FROM ubuntu:latest
```

- Uses the latest official Ubuntu image as the base

```docker
RUN apt-get update && apt-get install -y \
    build-essential \
    manpages-dev \
    vim \
    nano \
    iputils-ping \
    inetutils-traceroute \
    iproute2 \
    openssh-server \
    sudo \
    curl telnet dnsutils vim
```

- Updates and installs packages without asking for confirmation using the (-y flag)
- Packages
  - **build-essential** → Compiler and development tools.
  - **manpages-dev** → Development-related manual pages.
  - **vim / nano** → Text editors.
  - **iputils-ping** → Allows the use of the ping command.
  - **inetutils-traceroute** → For network troubleshooting (traceroute).
  - **iproute2** → Networking utilities (like ip command).
  - **openssh-server** → Enables SSH access to the container.
  - **sudo** → Allows privilege escalation.
  - **curl, telnet, dnsutils** → Useful networking tools.

```Docker
RUN useradd -m student
RUN echo "student:password" | chpasswd
RUN echo "root:password" | chpasswd
```

- creates a user "Student" in the home directory using the -m flag
- sets passwords for the student and the root allowing SHH login with these credentials

```docker
RUN adduser student sudo
RUN usermod -aG sudo student
RUN echo "student ALL=(ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers
```

- Adds the student to the sudo group, allowing them to execute commands as the root
- basically lets student use sudo commands without entering a password

```docker
RUN mkdir /run/sshd \
    && chown root:22 /run/sshd
```

- configuring SSH Daemon
- creates a directory required for SSH daemon
- basically changes its owner to root:22, ensuring correct permissions

```docker
USER student
```

- switch user to student for the following commands

```docker
RUN mkdir /home/student/lab-work
```

- create a directory where work will be done

```docker
RUN sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
```

- allows sshing into the container

```docker
EXPOSE 22
```

- makes port 22 available for the SSH connections

```docker
WORKDIR /home/student/lab-work
```

- When the container starts it will be in the following directory

```docker
CMD sudo /usr/sbin/sshd -D && /bin/bash
```

- Starts SSH daemon in the foreground (-D)
- allows users to connect via SSH when the container runs
- /bin/bash ensures the container remains running with an interactive shell

### Create the Image

- navigate to the folder where you have the dockerfile and type the following command

```sh
docker build -t myDocker .
```

- **docker build** is a command to create a new image
- **-t** is the option to provide the image tag name
- **myDocker** is just a random name you can select anything
- The **dot (.)** tells docker too look for the docker file in the current directory.

### Creating the Container

```sh
docker container create -i -t --name** lab-work -p 2200:22 -v [HOSTPATH]:[DESTPATH] myDocker
```

- **docker container create** is the command to ask Docker to create a container.
- **-i** stands for "interactive" and allows you to interact with the container's command prompt.
- **-t** stands for "tty" and allocates a pseudo-tty (terminal) for the container. This option allows you to interact with the container in a more user-friendly manner, as you would with a terminal session.
- **--name** is an option to assign a name to the container
- **lab-work** is the name of the container to be created using the specified image. The name will be used to start and stop the container later.
- **-p** option maps a host port to a container port, allowing traffic to be sent to the container through the specified port. It takes a value in the format host-port:container-port, where host-port is the port number on the host machine and container-port is the port number within the container.
- **2200:22** are the ports forwarding between your host computer and the container. We opted to forward all traffic from port 2200 in the host computer to port 22 in the container.
- **-v** option allows you to “mount” a local resource into your UNIX environment. So, for example, I use a directory C:\SE3313 on my computer to store all the code I want to access inside docker. Then, I type: -v C:\SE3313:/media/sf_SE3313. Now, inside the UNIX environment, I have created a new directory at path /media/sf_SE3313. I can edit files either in a Windows editor OR in a UNIX editor and the changes will be visible in both systems. You must use the ENTIRE path to the local resource. Just typing \SE3313 without specifying the drive name would not work.
- **myDocker** is the image name that will be used to create the container. The name should match the name used to create your Docker image in the previous step.

### Running Docker

**Start Docker container**

```sh
docker start myDocker
```

**Stop Docker container**

```sh
docker stop myDocker
```

**Open an Interactive terminal**

```sh
docker exec -it myDocker /bin/bash
```

_stop the container before you delete it_

### Open on VSCode

- click open remote window icon (bottom left of the window) or hit **ctrl-shift--p**
- search for _connect to host_ and select it (should be a remote ssh one)
- type _student@localhost:2200_
  - student is the user we set earlier
  - and make sure its the same port as what you set when creating the dockera
- enter password

### Copy Files

Get the container id

```sh
docker ps
```

Move the files

```
docker cp <conatiner_id>:<source_path> <destionation_Path>
```

Ex:

```sh hl=1,4
docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED       STATUS       PORTS                  NAMES
2aa48186e613   se3313    "/bin/sh -c 'sudo /u…"   8 weeks ago   Up 6 hours   0.0.0.0:2200->22/tcp   lab-work
docker cp 2aa48186e613:/home/student/lab-work/Lab2 ~/Desktop
```

# 🧠TOPIC

**Author:** [Virain Bawa](https://github.com/Virain6)
**Date:** 2025-03-04 14:37
**Tags:** [[Operating Systems]], [[Containerization]], [[Virtualization]]
**Status:**

# 📚References

Western SE3313: [[Installing Ubuntu using Docker.pdf]]
Youtube Video: https://www.youtube.com/watch?v=_dfLOzuIg2o&t=88s
