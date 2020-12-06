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

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN source ${ROS2_ROOT}/setup.bash \    
    && chmod -R 777 /home \
    && mkdir -p ${COLCON_WS}/src \    
    && cd ${COLCON_WS} \
    && colcon build --symlink-install \
    && source /root/.bashrc \
    && cd ${COLCON_WS}/src \
    && ros2 pkg create --build-type ament_python --node-name sensor_listener ros2py_sensor_listener \
    && cd ${COLCON_WS} \
    && colcon build --packages-select ros2py_sensor_listener \
    #&& echo "source ${COLCON_WS}/install/local_setup.bash" >> ${ROS2_ROOT}/setup.bash \
    #&& source ${COLCON_WS}/install/local_setup.bash \
    #&& source ${COLCON_WS}/install/setup.bash   
    && cd ${COLCON_WS}/src \ 
    && ros2 pkg create --build-type ament_python --node-name sensor_talker ros2py_sensor_talker \
    && cd ${COLCON_WS} \
    && colcon build --packages-select ros2py_sensor_talker
    #&& source ${COLCON_WS}/install/local_setup.bash 
    #&& source ${COLCON_WS}/install/setup.bash

RUN echo "source ${COLCON_WS}/install/local_setup.bash" >> ${ROS2_ROOT}/setup.bash
RUN echo "source ${COLCON_WS}/install/setup.bash" >> ${ROS2_ROOT}/setup.bash
RUN echo "source ${ROS2_ROOT}/setup.bash" >> /root/.bashrc
RUN source /root/.bashrc

WORKDIR ${COLCON_WS}