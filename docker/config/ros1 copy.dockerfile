# This is an auto generated Dockerfile for ros:desktop-full
# generated from docker_images/create_ros_image.Dockerfile.em
FROM osrf/ros:noetic-desktop-full

ENV ROS_DISTRO=noetic
ENV ROS_ROOT=/opt/ros/${ROS_DISTRO}
ENV CATKIN_WS=/home/ros_ws

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
    ros-noetic-roscpp-tutorials=0.10.2-1* \
    ros-noetic-rospy-tutorials=0.10.2-1* \          
    libpython3-dev \
    python3-rosdep \
    python3-rosinstall-generator \
    python3-vcstool \ 
    python3-pip \      
    build-essential && \
    rm /etc/ros/rosdep/sources.list.d/20-default.list && \
    rosdep init && \
    rosdep update && \
    rm -rf /var/lib/apt/lists/*

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN source ${ROS_ROOT}/setup.bash

RUN source ${ROS_ROOT}/setup.bash \
    && chmod -R 777 /home \
    && mkdir -p $CATKIN_WS/src \
    && cd $CATKIN_WS/src \    
    && catkin_init_workspace \
    && cd $CATKIN_WS \
    && catkin_make \
    && source devel/setup.bash \
#RUN echo 'source devel/setup.bash' >> /root/.bashrc
#RUN source /root/.bashrc
    && cd $CATKIN_WS/src \
    && catkin_create_pkg rospy_sensor_listener rospy std_msgs \
    && cd $CATKIN_WS \
    && catkin_make \
    && source devel/setup.bash \
    && cd $CATKIN_WS/src \
    && catkin_create_pkg rospy_sensor_talker rospy std_msgs \
    && cd $CATKIN_WS \
    && catkin_make \
    && source devel/setup.bash

RUN echo 'source $CATKIN_WS/devel/setup.bash' >> /root/.bashrc
RUN echo 'source ${ROS_ROOT}/setup.bash' >> /root/.bashrc
RUN source /root/.bashrc

WORKDIR ${CATKIN_WS}