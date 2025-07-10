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
        title="A Wireless Serial Monitor"
        subtitle="with mouse coordinates and a retro theme"
      />
      
      <main className="container mx-auto px-4 py-12">
        <ProjectArticle
        title="What's a Serial Monitor?"
        content="Back in yee olden days the simplest way to send data over a wire was bit by bit, one after the other. That's what serial ports were used for, it looks like a weird VGA port with less pins ( usually 9 pins ) and is common on old hardware. This was replaced by USB entirely and you can still use the Rs-232 standard today.
        I use serial ports for communicating with microcontroller like many others, and used to use the Arduino IDE's built in serial monitor. This is great for sending commands to an arduino like driving a motor or toggling LEDs. I built my own serial monitor with WiFi capabilities and the feature of sending mouse coordinates over serial.
        This Project uses an RS-232 protocol library made by Teuniz: https://gitlab.com/Teuniz/RS-232.git and uses a nice ImGUI wrapper called Walnut made by TheCherno: https://github.com/StudioCherno/Walnut

        "
        />


        <ProjectArticle 
          title="Whats a Laser Turret?"
          content="This project was intended to make Michael Reevee's Laser Turret wireless.
          I accomplish this with two Raspberry Pi Pico W's. One is optionally connected to the computer and acts as a transmitter. We'll call this Pico the Transmitter from now on.
          The Transmitter can use WiFi, Bluetooth, or Radio. If the Turret is using WiFi, the Serial Monitor Application can directly connect to it, easy.
          The Transmitter is needed for Bluetooth or Radio, as you can't just connect a windows PC to the microcontroller via bluetooth, you got to write custom software to interact with these special devices. ( And I doubt your PC has a built in NRF24 Radio module )
          It then it transmits the data to the reciever Pico W (The Laser Turret), which then drives two servo motors. One controlls Pan, the other controlls Yaw. A 5mW Laser Diode is glued to the Yaw motor. With 180 Degrees of rotation for both motors, we can controll the turret with the Desktop Application."
          
        />
        
        <ProjectArticle 
          title="Issues"
          content="
		Cool! Michael Reevee's already made a tutorial on this with an Arduino and WinForms with C#. I rewrote the arduino firmware in C with the Pico SDK and took mouse coordinates from ImGUI desktop application to send over the ComPort to the Transmitter. And here's where we make it wireless, the point of this project. I'm sure anyone can slap up a server thread on the desktop application and handle a WiFi connection with a Pico W. This is also included in the project, but I wanted to add Bluetooth and Radio Capabilities to get around needing a router for this setup. The goal would be to take it to a friends house and show it off. 
	  The thing about making a wireless device is power. When Transmitting data with an NRF24L01+ 2.4G module, it needs a constant supply of power to sucessfully transmit data or you'll get transmission failiures. 
    The hardest part of this project was circuit design around this issue. I got a prototype board with a small 1000mAh LiPo Battery and the charging circuit for it respectively. The battery gives me a little over 4v when completely charged.
    The NRF24 module I used was really picky and required 3.3 volts so I used a HT7333 Module with a Buck converter to make sure it got that 3.3v. The transmitter still had issues and requires a capacitor to help smooth out the power.
    After salvaging some caps from scrap electronics and experiencing thermodynamics on a 10 year old cap, I broke the nrf24 module for the turret, and possibly the pico's I was working with. The project is on hold until I can afford to purchase replacement parts, and currently I'm working with other mirocontrollers and circuit designs in the meantime.
	  "
        />
        
        <ImageSection 
          imageUrl="https://www.scuzzy.space/qd/CircuitFrontView.jpg"
        />
        <ImageSection 
          imageUrl="https://www.scuzzy.space/qd/CircuitBackView.jpg"
        />
        
        <ProjectArticle 
          title="In action"
          content="
          The pins to interact with the Servo Motors are just above the buck converter in the image above. Tests with WiFi and Radio have been sucessful, and a complete video on this will be uploaded to youtube soon when I get bluetooth working smoothly.
          I want all three implimented before a full video on this is out. A bluetooth module is not required to be installed on your PC or on the Pico W's because the Pico W has it's own Bluetooth capabilities, but It has proven difficult for me to get it working reliably.
          All firmware is included in the repo.
          "
        />

        <ProjectArticle 
          title="To Be Continued"
          content="I work on this project on and off between other projects, Work and college so updates to this will be slower then I'd like but I'll keep this page updated. Thank's for reading."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Micro;
