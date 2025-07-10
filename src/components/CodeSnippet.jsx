import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// You can choose different themes:
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ title, code, language = 'javascript' }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      <SyntaxHighlighter language={language} style={oneDark} customStyle={{ borderRadius: '0.5rem' }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
