/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const FullPage = ({
  children,
  bgColor = "white",
  bgImage = "",
  bgGradient = "",
  padding = "",
  center = false,
  overlay = false,
  className = "",
  ...props
}) => {
  return (
    <div 
      className={`
        min-h-screen 
        w-full 
        ${bgColor ? `bg-${bgColor}` : ''} 
        ${bgGradient} 
        ${bgImage ? `bg-[url('${bgImage}')] bg-cover bg-center` : ''}
        ${padding}
        ${center ? 'flex items-center justify-center' : ''}
        relative
        ${className}
      `}
      {...props}
    >
      {overlay && (
        <div className={`absolute inset-0 ${overlay === true ? 'bg-black/10' : overlay}`} />
      )}
      
      {children}
    </div>
  );
};

export default FullPage;