# This is an auto generated Dockerfile for ros:desktop-full
# generated from docker_images/create_ros_image.Dockerfile.em

FROM ros:foxy-ros1-bridge

ENV ROS1_DISTRO=noetic
ENV ROS1_ROOT=/opt/ros/${ROS1_DISTRO}
ENV ROS2_DISTRO=foxy
ENV ROS2_ROOT=/opt/ros/${ROS2_DISTRO}

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

# install ros packages
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

# install ros2 packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \    
    nano \
	libasio-dev \
    libtinyxml2-dev \
    libcunit1-dev \
    ros-foxy-ros1-bridge=0.9.4-1* \
    ros-foxy-demo-nodes-cpp=0.9.3-1* \
    ros-foxy-demo-nodes-py=0.9.3-1* \
    && rm -rf /var/lib/apt/lists/*

RUN echo "source ${ROS1_ROOT}/setup.bash" >> /root/.bashrc
RUN echo "source ${ROS2_ROOT}/setup.bash" >> /root/.bashrc