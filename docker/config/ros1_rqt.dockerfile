# This is an auto generated Dockerfile for ros:desktop-full
# generated from docker_images/create_ros_image.Dockerfile.em
FROM osrf/ros:noetic-desktop-full

ENV ROS_DISTRO=noetic
ENV ROS_ROOT=/opt/ros/${ROS_DISTRO}
ENV ROS_WS=/home/ros_ws

# add the ROS deb repo to the apt sources list
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    git \
    nano \
	cmake \
	build-essential \
	curl \
	wget \ 
	gnupg2 \
	lsb-release \
    && rm -rf /var/lib/apt/lists/*

# setup ros1 keys
RUN sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

# setup sources.list
RUN apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654

# install bootstrap dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ros-noetic-ros-comm=1.15.9-1* \           
    libpython3-dev \
    python3-rosdep \
    python3-rosinstall-generator \
    python3-vcstool \       
    build-essential && \
    rm /etc/ros/rosdep/sources.list.d/20-default.list && \
    rosdep init && \
    rosdep update && \
    rm -rf /var/lib/apt/lists/*

WORKDIR ${ROS_WS}

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN source ${ROS_ROOT}/setup.bash
RUN echo "source ${ROS_ROOT}/setup.bash" >> /root/.bashrc
RUN printf "export QT_GRAPHICSSYSTEM=native\nsource ${ROS_ROOT}/setup.bash" >> ${ROS_WS}/.bashrc