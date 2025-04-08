import React from 'react'

const Project = ({ title, description, imageUrl, badgeText }) => {
    return (
      <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
        <span className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 text-white text-sm font-semibold uppercase">
          {badgeText}
        </span>
  
        <img
          src={imageUrl}
          alt={title}
          className="h-80 w-full rounded-tr-3xl object-cover"
        />
  
        <div className="p-4 text-center">
          <strong className="text-xl text-gray-900">{title}</strong>
          <p className="mt-2 text-gray-700">{description}</p>
          <span className="mt-4 inline-block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-2 text-sm text-white uppercase hover:bg-white hover:text-indigo-900">
            Learn More
          </span>
        </div>
      </a>
    );
  };
  
  export default Project;

