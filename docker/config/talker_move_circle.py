#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Nov 23 01:09:24 2020
Script to move Selfcar in a circle
@author: asilva943rj
"""
import rospy
from geometry_msgs.msg import Twist
from time import sleep

def talker():

    rospy.init_node('talker')
    # Create a publisher which can "talk" to selfcar and tell it to move
    pub = rospy.Publisher('selfcar/cmd_vel', Twist, queue_size=1)
     
    # Create a Twist message and add linear x and angular z values
    move_cmd = Twist()
    move_cmd.linear.x = 1.0
    move_cmd.angular.z = 1.0

    # Save current time and set publish rate at 10 Hz
    now = rospy.Time.now()
    rate = rospy.Rate(2)

    # For the next 6 seconds publish cmd_vel move commands to selfcar
    while rospy.Time.now() < now + rospy.Duration.from_sec(6):
        pub.publish(move_cmd)
        rate.sleep()

if __name__ == '__main__':
    try:
        talker()
    except rospy.ROSInterruptException:
        pass