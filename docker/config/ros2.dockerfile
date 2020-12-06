FROM osrf/ros2:nightly-rmw-nonfree

ENV ROS2_DISTRO=foxy
ENV ROS2_ROOT=/opt/ros/${ROS2_DISTRO}
ENV COLCON_WS=/home/ros2_ws

# add the ROS deb repo to the apt sources list
RUN apt-get update && \
    apt-get install -y --no-install-recommends \    
    nano \
    git \
    ros-foxy-demo-nodes-cpp=0.9.3-1* \
    ros-foxy-demo-nodes-py=0.9.3-1* \  
    python3-rosdep \
    python3-rosinstall-generator \
    python3-vcstool \
    python3-pip \       
    build-essential \
    libpython3-dev \
	libasio-dev \
    libtinyxml2-dev \
    libcunit1-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR ${COLCON_WS}

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN source ${ROS2_ROOT}/setup.bash    
RUN echo "source ${ROS2_ROOT}/setup.bash" >> /root/.bashrc
RUN source /root/.bashrc