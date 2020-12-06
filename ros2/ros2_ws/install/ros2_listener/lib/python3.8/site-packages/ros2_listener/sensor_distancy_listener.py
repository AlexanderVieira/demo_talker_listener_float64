#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on fri Dec 06 20:09:24 2020
Script to sensor distancy
@author: asilva943rj
"""

import rclpy
from rclpy.node import Node
from std_msgs.msg import Float64


class Listener(Node):
    
    def __init__(self):
        # Calls Node.__init__('listener')
        super().__init__('sensor_listener_node')
        self.sub = self.create_subscription(Float64, 'distancy', self.distancy_callback, 5)

    def distancy_callback(self, msg):
        self.get_logger().info('Recebendo dados: "%d"' % msg.data)


def main(args=None):    
    
    rclpy.init(args=args)
    try:
        listener = Listener()
        rclpy.spin(listener)
    finally:
        listener.destroy_node()
        rclpy.shutdown()


if __name__ == '__main__':
    
    main()
