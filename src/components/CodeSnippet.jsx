import React from 'react';

const CodeSnippet = ({ title, code }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <pre className="bg-zinc-800 p-4 rounded-lg overflow-auto">
        <code className="prettyprint">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;

