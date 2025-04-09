// src/pages/ProjectPage.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectArticle from '@/components/ProjectArticle';
import CodeSnippet from '@/components/CodeSnippet';
import ImageSection from '@/components/ImageSection';

const WTDD = () => {
  return (
    <div>
      <Header 
        title="What the dawg doin?"
        subtitle="a c coders first android app "
      />
      
      <main className="container mx-auto px-4 py-12 flex flex-col items-center space-y-8">
        <ProjectArticle 
          title="whats an apk?"
          content=" 
	  so i've been a broke kid with friends who taught me how to get my favorite games for free. piracy :)))
	  I went to horrific sites and downloaded tons of sketchy apks and had a blast. but ive always wondered how to make an app.
	  after submitting a review for a port scanning app on the playstore, i got a response from the dev. he mentioned kotlin, and Java. I only learned some python and C at that time, all those years ago, and had no idea what he was talking about. so i googled around and found myself installing android studio. too bad my one and only computer at the time was a small travelmate laptop i got secondhand from a friend. it had 2gb of ram and a dual core cpu. android studio was NOT running. but my middle school computer classes showed us MIT App inventor 2, which is like scratch of android app development. I'm talking code blocks you drag and drop onto a canvas. YUP, this was my first android app and soon i was showing all my friends this apk file I 'made'. and the years went by, I got better and got my hands on better hardware. so i gave android studio another try. but what to make?

"
          className="mb-8"
        />
	<ImageSection
          title="proof of concept"
          imageUrl="https://github.com/0xKitKoi/WhatTheDawgDoin/raw/master/readme%20imgs/demo.png"
        />
        
        <ProjectArticle 
          title="What IS shawn up to?"
          content="I'm a horrible texter and have a lot of trouble responding to my dms. my friends always ask what im doing, so i wanted to do something about it the only way i knew how, with webslop YAAAYYYYYYYYY!!!!11!!!1!"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default WTDD;

