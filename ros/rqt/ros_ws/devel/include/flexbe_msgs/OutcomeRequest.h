// Generated by gencpp from file flexbe_msgs/OutcomeRequest.msg
// DO NOT EDIT!


#ifndef FLEXBE_MSGS_MESSAGE_OUTCOMEREQUEST_H
#define FLEXBE_MSGS_MESSAGE_OUTCOMEREQUEST_H


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
struct OutcomeRequest_
{
  typedef OutcomeRequest_<ContainerAllocator> Type;

  OutcomeRequest_()
    : outcome(0)
    , target()  {
    }
  OutcomeRequest_(const ContainerAllocator& _alloc)
    : outcome(0)
    , target(_alloc)  {
  (void)_alloc;
    }



   typedef uint8_t _outcome_type;
  _outcome_type outcome;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _target_type;
  _target_type target;





  typedef boost::shared_ptr< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> const> ConstPtr;

}; // struct OutcomeRequest_

typedef ::flexbe_msgs::OutcomeRequest_<std::allocator<void> > OutcomeRequest;

typedef boost::shared_ptr< ::flexbe_msgs::OutcomeRequest > OutcomeRequestPtr;
typedef boost::shared_ptr< ::flexbe_msgs::OutcomeRequest const> OutcomeRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator1> & lhs, const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator2> & rhs)
{
  return lhs.outcome == rhs.outcome &&
    lhs.target == rhs.target;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator1> & lhs, const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace flexbe_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "b057cf075cb943bf0dbb3443419a61ed";
  }

  static const char* value(const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xb057cf075cb943bfULL;
  static const uint64_t static_value2 = 0x0dbb3443419a61edULL;
};

template<class ContainerAllocator>
struct DataType< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "flexbe_msgs/OutcomeRequest";
  }

  static const char* value(const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "uint8 outcome\n"
"string target\n"
;
  }

  static const char* value(const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.outcome);
      stream.next(m.target);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct OutcomeRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::flexbe_msgs::OutcomeRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::flexbe_msgs::OutcomeRequest_<ContainerAllocator>& v)
  {
    s << indent << "outcome: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.outcome);
    s << indent << "target: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.target);
  }
};

} // namespace message_operations
} // namespace ros

#endif // FLEXBE_MSGS_MESSAGE_OUTCOMEREQUEST_H
