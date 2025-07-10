import React from 'react';

const ProjectArticle = ({ title, content }) => {
  return (
    <article className="prose prose-invert lg:prose-xl max-w-none mx-auto ">
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      <p style={{ whiteSpace: 'pre-line' }} >{content}</p>
    </article>
  );
};

export default ProjectArticle;

