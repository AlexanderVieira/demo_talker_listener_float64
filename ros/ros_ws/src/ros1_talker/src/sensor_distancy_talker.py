#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on fri Dec 04 20:09:24 2020
Script to sensor distancy
@author: asilva943rj
"""

import rospy
from std_msgs.msg import Float64

def read_distancy_sensor_data():    
    return 2.0

if __name__ == '__main__':
    
    rospy.init_node("sensor_distancy_node")
    
    # Create a ROS publisher
    data_publisher = rospy.Publisher("/distancy", Float64, queue_size=1)
    
    # Create a rate
    rate = rospy.Rate(1)
    while not rospy.is_shutdown():
        msg = Float64()
        msg.data = read_distancy_sensor_data()
        data_publisher.publish(msg)
        rate.sleep()