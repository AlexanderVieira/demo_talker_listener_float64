;; Auto-generated. Do not edit!


(when (boundp 'flexbe_msgs::BehaviorInputGoal)
  (if (not (find-package "FLEXBE_MSGS"))
    (make-package "FLEXBE_MSGS"))
  (shadow 'BehaviorInputGoal (find-package "FLEXBE_MSGS")))
(unless (find-package "FLEXBE_MSGS::BEHAVIORINPUTGOAL")
  (make-package "FLEXBE_MSGS::BEHAVIORINPUTGOAL"))

(in-package "ROS")
;;//! \htmlinclude BehaviorInputGoal.msg.html


(defclass flexbe_msgs::BehaviorInputGoal
  :super ros::object
  :slots (_request_type _msg ))

(defmethod flexbe_msgs::BehaviorInputGoal
  (:init
   (&key
    ((:request_type __request_type) 0)
    ((:msg __msg) "")
    )
   (send-super :init)
   (setq _request_type (round __request_type))
   (setq _msg (string __msg))
   self)
  (:request_type
   (&optional __request_type)
   (if __request_type (setq _request_type __request_type)) _request_type)
  (:msg
   (&optional __msg)
   (if __msg (setq _msg __msg)) _msg)
  (:serialization-length
   ()
   (+
    ;; uint8 _request_type
    1
    ;; string _msg
    4 (length _msg)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint8 _request_type
       (write-byte _request_type s)
     ;; string _msg
       (write-long (length _msg) s) (princ _msg s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint8 _request_type
     (setq _request_type (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; string _msg
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _msg (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(setf (get flexbe_msgs::BehaviorInputGoal :md5sum-) "724150348fd57a5ebc07765871d3f316")
(setf (get flexbe_msgs::BehaviorInputGoal :datatype-) "flexbe_msgs/BehaviorInputGoal")
(setf (get flexbe_msgs::BehaviorInputGoal :definition-)
      "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
# If desired, custom request types can be defined and choosen here
uint8 request_type

# Request message displayed to the operator
# Provide context information, i.e. for which purpose the data is required.
string msg


")



(provide :flexbe_msgs/BehaviorInputGoal "724150348fd57a5ebc07765871d3f316")


