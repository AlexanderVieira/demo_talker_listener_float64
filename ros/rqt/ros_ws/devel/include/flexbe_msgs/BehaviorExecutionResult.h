// Generated by gencpp from file flexbe_msgs/BehaviorExecutionResult.msg
// DO NOT EDIT!


#ifndef FLEXBE_MSGS_MESSAGE_BEHAVIOREXECUTIONRESULT_H
#define FLEXBE_MSGS_MESSAGE_BEHAVIOREXECUTIONRESULT_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace flexbe_msgs
{
template <class ContainerAllocator>
struct BehaviorExecutionResult_
{
  typedef BehaviorExecutionResult_<ContainerAllocator> Type;

  BehaviorExecutionResult_()
    : outcome()  {
    }
  BehaviorExecutionResult_(const ContainerAllocator& _alloc)
    : outcome(_alloc)  {
  (void)_alloc;
    }



   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _outcome_type;
  _outcome_type outcome;





  typedef boost::shared_ptr< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> const> ConstPtr;

}; // struct BehaviorExecutionResult_

typedef ::flexbe_msgs::BehaviorExecutionResult_<std::allocator<void> > BehaviorExecutionResult;

typedef boost::shared_ptr< ::flexbe_msgs::BehaviorExecutionResult > BehaviorExecutionResultPtr;
typedef boost::shared_ptr< ::flexbe_msgs::BehaviorExecutionResult const> BehaviorExecutionResultConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator1> & lhs, const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator2> & rhs)
{
  return lhs.outcome == rhs.outcome;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator1> & lhs, const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace flexbe_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
{
  static const char* value()
  {
    return "2b95071cca675b3d5b80ad0bdaf20389";
  }

  static const char* value(const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x2b95071cca675b3dULL;
  static const uint64_t static_value2 = 0x5b80ad0bdaf20389ULL;
};

template<class ContainerAllocator>
struct DataType< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
{
  static const char* value()
  {
    return "flexbe_msgs/BehaviorExecutionResult";
  }

  static const char* value(const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
{
  static const char* value()
  {
    return "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======\n"
"\n"
"# result of the executed behavior\n"
"string outcome\n"
"\n"
;
  }

  static const char* value(const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.outcome);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct BehaviorExecutionResult_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::flexbe_msgs::BehaviorExecutionResult_<ContainerAllocator>& v)
  {
    s << indent << "outcome: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.outcome);
  }
};

} // namespace message_operations
} // namespace ros

#endif // FLEXBE_MSGS_MESSAGE_BEHAVIOREXECUTIONRESULT_H
