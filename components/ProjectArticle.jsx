import React from 'react';

const ProjectArticle = ({ title, content }) => {
  return (
    <article className="prose prose-invert max-w-none lg:prose-xl mx-auto">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default ProjectArticle;

