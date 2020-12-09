// Auto-generated. Do not edit!

// (in-package flexbe_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class BehaviorExecutionResult {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.outcome = null;
    }
    else {
      if (initObj.hasOwnProperty('outcome')) {
        this.outcome = initObj.outcome
      }
      else {
        this.outcome = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type BehaviorExecutionResult
    // Serialize message field [outcome]
    bufferOffset = _serializer.string(obj.outcome, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type BehaviorExecutionResult
    let len;
    let data = new BehaviorExecutionResult(null);
    // Deserialize message field [outcome]
    data.outcome = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += _getByteLength(object.outcome);
    return length + 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'flexbe_msgs/BehaviorExecutionResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2b95071cca675b3d5b80ad0bdaf20389';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    # result of the executed behavior
    string outcome
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new BehaviorExecutionResult(null);
    if (msg.outcome !== undefined) {
      resolved.outcome = msg.outcome;
    }
    else {
      resolved.outcome = ''
    }

    return resolved;
    }
};

module.exports = BehaviorExecutionResult;
