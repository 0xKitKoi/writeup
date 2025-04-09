import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-zinc-800 max-w-none mx-auto">
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Technical Writeup. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

