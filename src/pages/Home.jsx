// src/pages/ProjectPage.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectArticle from '@/components/ProjectArticle';
import CodeSnippet from '@/components/CodeSnippet';
import ImageSection from '@/components/ImageSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center text-zinc-100 flex flex-col items-center space-y-8">
      <Header 
        title="React Blog"
        subtitle="Custom Writeup Blog for my Projects"
      />
      
      <main className="container mx-auto px-4 py-12 flex flex-col items-center space-y-8">
        <ProjectArticle 
          title="What, Why?"
          content="But shawn, you're a backend dev. why are you touching react? \n
           Yeah I'm a full stack dev now. I can do anything and everything, I bend my will into the trillions of transistors in your computer. I am a wizard, harry."
           
        />
        
        <ProjectArticle 
          title="But really, how?"
          content="My website index.html is handwritten. The other pages are Python CGI scripts. Now I took another step into React.JS.\n
          to bring my web dev journey to new heights. I've come from the ground up, from nothing but a single html file in my webroot\n
          to a website that uses a bunch of tech stacks nicely together.\n
          This is the result."
        />
        
        <CodeSnippet 
          title="Code Snippets"
          code={`const App = () => {
            return (
              <Router basename="/writeup/dist">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/WTDD" element={<WTDD />} />
                  <Route path="/Micro" element={<Micro />} />
                  <Route path="/ToDo" element={<TODO />} />
                </Routes>
              </Router>
            )
          }`}

        />
        
        <ImageSection 
          title="React Route screenshot"
          imageUrl="https://www.scuzzy.space/qd/homewriteup.png"
          //altText="A beautiful space scene"
        />
        
        <ProjectArticle 
          title="Conclusion"
          content=" It's elegant and I'm very happy with this."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;

