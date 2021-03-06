// Auto-generated. Do not edit!

// (in-package flexbe_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let SynthesisRequest = require('./SynthesisRequest.js');

//-----------------------------------------------------------

class BehaviorSynthesisGoal {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.request = null;
    }
    else {
      if (initObj.hasOwnProperty('request')) {
        this.request = initObj.request
      }
      else {
        this.request = new SynthesisRequest();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type BehaviorSynthesisGoal
    // Serialize message field [request]
    bufferOffset = SynthesisRequest.serialize(obj.request, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type BehaviorSynthesisGoal
    let len;
    let data = new BehaviorSynthesisGoal(null);
    // Deserialize message field [request]
    data.request = SynthesisRequest.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += SynthesisRequest.getMessageSize(object.request);
    return length;
  }

  static datatype() {
    // Returns string type for a message object
    return 'flexbe_msgs/BehaviorSynthesisGoal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '64ccf8fdad6091a950ca099bc67e6595';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new BehaviorSynthesisGoal(null);
    if (msg.request !== undefined) {
      resolved.request = SynthesisRequest.Resolve(msg.request)
    }
    else {
      resolved.request = new SynthesisRequest()
    }

    return resolved;
    }
};

module.exports = BehaviorSynthesisGoal;
