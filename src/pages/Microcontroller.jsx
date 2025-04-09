// src/pages/ProjectPage.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectArticle from '@/components/ProjectArticle';
import CodeSnippet from '@/components/CodeSnippet';
import ImageSection from '@/components/ImageSection';

const Micro = () => {
  return (
    <div className="min-h-screen bg-cover bg-center text-zinc-100">
      <Header 
        title="Microcontroller Communication | WiFi, BlueTooth, Radio"
        subtitle="Raspberry Pi Picow W with MicroPython / C"
      />
      
      <main className="container mx-auto px-4 py-12">
        <ProjectArticle 
          title="Whats a Laser Turret?"
          content="This project was intended to make Michael Reevee's Laser Turret wireless.
          I accomplish this with two Raspberry Pi Pico W's. One is optionally connected to the computer and acts as a transmitter.
          The Pico W can use WiFi or Bluetooth. If in bluetooth mode, the transmitter connects to the C++ ImGui Program
          and listens for text input or mouse coordinates over com ports. Then it transmits the data to the reciever Pico W, which then drives two servo motors. One controlls Pan, the other controlls Yaw. A 5mW Laser Diode is glued to the Yaw motor. with 180 Degrees of rotation for both motors, we can controll the turret with the Desktop Application."
        />
        
        <ProjectArticle 
          title="Issues"
          content="
		Cool! Michael Reevee's already made a tutorial on this with an Arduino and WinForms. I rewrote it in C with the Pico SDK and took mouse coordinated from ImGUI and sent that over the com port. And here's where we make it wireless, the point of this project. I'm sure anyone can slap up a server thread on the desktop application and handle a WiFi connection with a Pico W. So I wanted to add Bluetooth Capabilities. 
	  Oh boy did I hate this route. As of writing this, I have no idea how bluetooth works. From my experience, you cannot just connect the Pico W to your computer via bluetooth. Why? Well that's not how bluetooth operates, you have to follow the Standard. What is that? I have absolutely no idea. Basically your bluetooth program needs to 'advertise' your mac address to devices around you. But you have to tell them what you are. Meaning they have to already have some type of identifier to know what you are. So a standard was made. You want to send ASCII over bluetooth? No, nothing in the standard does that, because why would you ever need to send anything over bluetooth besides blasting Fetty WAP to your JBL?
	  Well, there is UART. That's a protocol on it's own, but after struggling for days I asked chatgpt to explain this shitshow. Well it spit out something along the lines of:
	  add these madjick random hex values to this python library object and hit the advertise().
	  
	  well, I was using the Pico w's C sdk, but whatever, I just want to send data.
	  'Hello gpt plz pretty plzz gimme example of sending some strings pver bluetooth thank uuuuuu!!!1!'
	  and sadly, I can't seem to figure out what standard I can follow to send strings over bluetooh. 
	  oh, and BTW packets in bluetooth are 20 bytes and are not bigger..??? deal with it.

	  ok so I have no idea what im doing and bluetooth seems to be capable of sending files and streaming music, but you cant just send raw char buffers, thats absurd of you to even ask, and go piss off.

	  I'm obviously not cool with that what the fuck is bluetooth someone help oh god AAAUgghh AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

	  oh radio is a thing

	  
	  "
        />
        
        <CodeSnippet 
          title="introducing radio"
          code="
	void loop() {
  		char message[] = 'Hello from Arduino!';
  		bool success = radio.write(&message, sizeof(message)); // Send data
	}

		"
        />
        
        <ImageSection 
          title="radio for the win?"
          imageUrl="https://m.media-amazon.com/images/I/61COdU0iooL._AC_SL1010_.jpg"
        />
        
        <ProjectArticle 
          title="to be continued"
          content="I'll bang my head against the keyboard until i figure out bluetooth or figure out radio. until then"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Micro;
