// Auto-generated. Do not edit!

// (in-package flexbe_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let BehaviorSynthesisActionGoal = require('./BehaviorSynthesisActionGoal.js');
let BehaviorSynthesisActionResult = require('./BehaviorSynthesisActionResult.js');
let BehaviorSynthesisActionFeedback = require('./BehaviorSynthesisActionFeedback.js');

//-----------------------------------------------------------

class BehaviorSynthesisAction {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.action_goal = null;
      this.action_result = null;
      this.action_feedback = null;
    }
    else {
      if (initObj.hasOwnProperty('action_goal')) {
        this.action_goal = initObj.action_goal
      }
      else {
        this.action_goal = new BehaviorSynthesisActionGoal();
      }
      if (initObj.hasOwnProperty('action_result')) {
        this.action_result = initObj.action_result
      }
      else {
        this.action_result = new BehaviorSynthesisActionResult();
      }
      if (initObj.hasOwnProperty('action_feedback')) {
        this.action_feedback = initObj.action_feedback
      }
      else {
        this.action_feedback = new BehaviorSynthesisActionFeedback();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type BehaviorSynthesisAction
    // Serialize message field [action_goal]
    bufferOffset = BehaviorSynthesisActionGoal.serialize(obj.action_goal, buffer, bufferOffset);
    // Serialize message field [action_result]
    bufferOffset = BehaviorSynthesisActionResult.serialize(obj.action_result, buffer, bufferOffset);
    // Serialize message field [action_feedback]
    bufferOffset = BehaviorSynthesisActionFeedback.serialize(obj.action_feedback, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type BehaviorSynthesisAction
    let len;
    let data = new BehaviorSynthesisAction(null);
    // Deserialize message field [action_goal]
    data.action_goal = BehaviorSynthesisActionGoal.deserialize(buffer, bufferOffset);
    // Deserialize message field [action_result]
    data.action_result = BehaviorSynthesisActionResult.deserialize(buffer, bufferOffset);
    // Deserialize message field [action_feedback]
    data.action_feedback = BehaviorSynthesisActionFeedback.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += BehaviorSynthesisActionGoal.getMessageSize(object.action_goal);
    length += BehaviorSynthesisActionResult.getMessageSize(object.action_result);
    length += BehaviorSynthesisActionFeedback.getMessageSize(object.action_feedback);
    return length;
  }

  static datatype() {
    // Returns string type for a message object
    return 'flexbe_msgs/BehaviorSynthesisAction';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3f70602e7ef6378d09fa82dd8284fb29';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    BehaviorSynthesisActionGoal action_goal
    BehaviorSynthesisActionResult action_result
    BehaviorSynthesisActionFeedback action_feedback
    
    ================================================================================
    MSG: flexbe_msgs/BehaviorSynthesisActionGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalID goal_id
    BehaviorSynthesisGoal goal
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: actionlib_msgs/GoalID
    # The stamp should store the time at which this goal was requested.
    # It is used by an action server when it tries to preempt all
    # goals that were requested before a certain time
    time stamp
    
    # The id provides a way to associate feedback and
    # result message with specific goal requests. The id
    # specified must be unique.
    string id
    
    
    ================================================================================
    MSG: flexbe_msgs/BehaviorSynthesisGoal
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # Minimal template for a behavior synthesis action.
    # As long as your action type supports at least the fields listed below, you can also use a custom one.
    
    # Request message as set in the FlexBE UI
    SynthesisRequest request
    
    
    ================================================================================
    MSG: flexbe_msgs/SynthesisRequest
    # Minimal template for the request data provided by the FlexBE synthesis interface.
    # Either refer this message as 'request' in the goal part of your synthesis action
    # or implement your own by at least supporting the fields listed below.
    
    # Identifier of this synthesis query, can for example be used to set the name of the resulting state machine
    string name
    
    # Identifier of the system (i.e., configuration data set) to be used by the synthesis tool
    string system
    
    # Goal to be achieved by the synthesized behavior
    string goal
    
    # Initial conditions from which the synthesized behavior will start
    string initial_condition
    
    # Available outcomes of the generated state machine,
    # i.e., possible results of the synthesized behavior
    string[] sm_outcomes
    ================================================================================
    MSG: flexbe_msgs/BehaviorSynthesisActionResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    BehaviorSynthesisResult result
    
    ================================================================================
    MSG: actionlib_msgs/GoalStatus
    GoalID goal_id
    uint8 status
    uint8 PENDING         = 0   # The goal has yet to be processed by the action server
    uint8 ACTIVE          = 1   # The goal is currently being processed by the action server
    uint8 PREEMPTED       = 2   # The goal received a cancel request after it started executing
                                #   and has since completed its execution (Terminal State)
    uint8 SUCCEEDED       = 3   # The goal was achieved successfully by the action server (Terminal State)
    uint8 ABORTED         = 4   # The goal was aborted during execution by the action server due
                                #    to some failure (Terminal State)
    uint8 REJECTED        = 5   # The goal was rejected by the action server without being processed,
                                #    because the goal was unattainable or invalid (Terminal State)
    uint8 PREEMPTING      = 6   # The goal received a cancel request after it started executing
                                #    and has not yet completed execution
    uint8 RECALLING       = 7   # The goal received a cancel request before it started executing,
                                #    but the action server has not yet confirmed that the goal is canceled
    uint8 RECALLED        = 8   # The goal received a cancel request before it started executing
                                #    and was successfully cancelled (Terminal State)
    uint8 LOST            = 9   # An action client can determine that a goal is LOST. This should not be
                                #    sent over the wire by an action server
    
    #Allow for the user to associate a string with GoalStatus for debugging
    string text
    
    
    ================================================================================
    MSG: flexbe_msgs/BehaviorSynthesisResult
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    # Provides feedback regarding possibly occured errors
    SynthesisErrorCodes error_code
    
    # Result of behavior synthesis as a list of state instantiations
    StateInstantiation[] states
    
    
    ================================================================================
    MSG: flexbe_msgs/SynthesisErrorCodes
    int32 value
    
    # success
    int32 SUCCESS = 1
    
    # all other values will be considered as any sort of error
    ================================================================================
    MSG: flexbe_msgs/StateInstantiation
    # Describes a single instantiation of a state
    
    # Path of this state inside the behavior
    # Last segment of the path is the name of this state
    # e.g. "/Inner_Statemachine/This_State"
    string state_path
    
    # Specifies the class implementing this state
    # Use one of the provided CLASS constants if this is not a primitive state
    # e.g. "CalculationState"
    string CLASS_STATEMACHINE 	= :STATEMACHINE
    string CLASS_CONCURRENCY 	= :CONCURRENCY
    string CLASS_PRIORITY 		= :PRIORITY
    string CLASS_BEHAVIOR 		= :BEHAVIOR
    string state_class
    
    
    
    # Only relevant for state machine, priority, and concurrency
    # Name of the initial state / state to be monitored
    string initial_state_name
    # Input and output keys (can be remapped below)
    string[] input_keys
    string[] output_keys
    
    # Only relevant for concurrency
    # Outcome conditions
    string[] cond_outcome
    OutcomeCondition[] cond_transition
    
    # Only relevant for behavior
    # Name of the class implementing this state
    string behavior_class
    
    # Only relevant for primitive state
    # List of parameter names and values of this state
    # Order of names and values has to match
    string[] parameter_names
    string[] parameter_values
    
    
    
    # Position of this state in the editor [x,y]
    float32[2] position
    
    # Outcomes of this state
    # Defines the order of the lists: transitions, autonomy
    string[] outcomes
    # Transition targets (state names or container outcomes) of the outcomes
    string[] transitions
    # Required autonomy level of the outcomes
    int8[] autonomy
    
    # Userdata of this state
    # Merges own input_keys and output_keys, no duplicates
    string[] userdata_keys
    # Remapping of the corresponding own key (= key used by container)
    string[] userdata_remapping
    ================================================================================
    MSG: flexbe_msgs/OutcomeCondition
    # Defines a conjunction of required state outcomes in order to return a concurrency outcome
    string[] state_name
    string[] state_outcome
    ================================================================================
    MSG: flexbe_msgs/BehaviorSynthesisActionFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    Header header
    actionlib_msgs/GoalStatus status
    BehaviorSynthesisFeedback feedback
    
    ================================================================================
    MSG: flexbe_msgs/BehaviorSynthesisFeedback
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    # Any custom feedback message regarding the status
    string status
    
    # Progress indication from 0 (started) to 1 (completed)
    float32 progress
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new BehaviorSynthesisAction(null);
    if (msg.action_goal !== undefined) {
      resolved.action_goal = BehaviorSynthesisActionGoal.Resolve(msg.action_goal)
    }
    else {
      resolved.action_goal = new BehaviorSynthesisActionGoal()
    }

    if (msg.action_result !== undefined) {
      resolved.action_result = BehaviorSynthesisActionResult.Resolve(msg.action_result)
    }
    else {
      resolved.action_result = new BehaviorSynthesisActionResult()
    }

    if (msg.action_feedback !== undefined) {
      resolved.action_feedback = BehaviorSynthesisActionFeedback.Resolve(msg.action_feedback)
    }
    else {
      resolved.action_feedback = new BehaviorSynthesisActionFeedback()
    }

    return resolved;
    }
};

module.exports = BehaviorSynthesisAction;