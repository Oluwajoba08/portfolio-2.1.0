import React from 'react';

const Badge = ({ color, children, ...props }) => {
  const getColorClasses = () => {
    switch(color) {
      case "red":
        return "bg-red-100 text-red-700 border-red-300";
      case "blue":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "green":
        return "bg-green-100 text-green-700 border-green-300";
      case "yellow":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "lime":
        return "bg-lime-100 text-lime-700 border-lime-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <span {...props} 
        className={`${getColorClasses()} px-3 py-1 rounded-full text-sm border-[1.5px] font-medium hover:shadow-md transition-shadow duration-300`}
    >
        {children}
    </span>
  );
};

export default Badge;