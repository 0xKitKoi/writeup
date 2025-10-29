// src/pages/ProjectPage.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectArticle from '@/components/ProjectArticle';
import CodeSnippet from '@/components/CodeSnippet';
import ImageSection from '@/components/ImageSection';

const TODO = () => {
  return (
    <div className="bg-zinc-700 min-h-screen bg-cover bg-center text-zinc-100">
      <Header 
        title="dId SoMeOnE sAy WeBdEv wItH PYtHoN?!?!1?"
        subtitle="'Because python can do anything.. Just Badly.' - michael reeves"
      />
      
      <main className="container mx-auto px-4 py-12">
        <ProjectArticle 
          title="whats a web app ?"
          content="So I started this website writing basic handwritten html and css in notepad.exe and using a usb to put it on my laptop. oh, how young i was. Well I decided programming was for me and typed: 'how to code' into youtube. Back then, a computer teacher in middle school wouldnt teach me python because it was for 'college kids'
	  well i decided i was cool enough so I clicked on one and learned to print in python. I never thought printing could do anything more then dump some text in my terminal that made all my fiends call me a hacker. 
	  but apparently CGI Scripts are a thing. I found some tutorial on using python as a cgi script. 
	  This is basically the server running the python script and some how standard out was redirected to the user's browser. So you can use python to 'print' html. very cool.  
	  "
        />
        
        <CodeSnippet 
          title="cgi example"
          code="

	print('<html><body style='background-color:#696969; charset=UTF-8'>')
	form = cgi.FieldStorage()
	if form.getvalue('password'):
    		password = form.getvalue('password')
    		if password in ('supersecretpassword', ''):
        		print('<button class='button' onclick='window.location.href='/dashboard.html';'>Dashboard</button>')
        		print('<button class='button' onclick='window.location.href='/adminpanel.html';'>Admin Panel</button>')
    		else:
        		print('<p>Auth Failed.</p>')

		"
        />
        
        <ProjectArticle 
          title="From CGI to Django"
          content="
	  There's a better way. introducing Django! a web development framework to make development faster, and better. No more skimpy cgi scripts to avoid javascript at all costs. Now it's time for some REAL web dev. which means templates and components.
	So I cobbled together tutorials and documentation, took css from pretty websites i liked and googled 'how to center a div' like a million times [ i still have to google it sometimes ] 
	  and I made a todo web app. It stores text entries into a MongoDB database. it supports editing the entries, marking them as completed, and deleting them. theres also an admin panel but SHHHHH the bots r listening!!1!!

	  "
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default TODO;

