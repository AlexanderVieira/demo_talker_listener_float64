#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Nov 23 01:09:24 2020
Script to move Selfcar in a circle
@author: asilva943rj
"""
#!/usr/bin/env python
import rospy
from geometry_msgs.msg import Twist

def callback(data):
  rospy.loginfo(rospy.get_caller_id() + "I heard %d", data.linear.x)

def listener():

# In ROS, nodes are uniquely named. If two nodes with the same
# node are launched, the previous one is kicked off. The
# anonymous=True flag means that rospy will choose a unique
# name for our 'listener' node so that multiple listeners can
# run simultaneously.
   rospy.init_node('listener', anonymous=True)

   rospy.Subscriber("selfcar/cmd_vel'", Twist, callback)

# spin() simply keeps python from exiting until this node is stopped
   rospy.spin()

if __name__ == '__main__':
      listener()

