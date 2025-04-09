import React from 'react';

const ImageSection = ({ title, imageUrl, altText }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <div className="flex justify-center my-8">
        <img src={imageUrl} alt={altText} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default ImageSection;

