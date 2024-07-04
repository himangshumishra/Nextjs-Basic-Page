  'use client'
import React from 'react';

interface CardProps {
  title?: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  const defaultContent = "Something";
  return (
    <div className=' h-96 border border-white m-2 w-10/12 text-center'>
      {title ? title : defaultContent}
    </div>
  );
};

export default Card;