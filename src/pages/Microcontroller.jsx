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
    <div className="bg-zinc-700 min-h-screen bg-cover bg-center text-zinc-100">
      <Header 
        title="A Wireless Serial Monitor"
        subtitle="with mouse coordinates and a retro theme"
      />
      
      <main className="container mx-auto px-4 py-12">
        <ProjectArticle
        title="What's a Serial Monitor?"
        content="Back in yee olden days the simplest way to send data over a wire was bit by bit, one after the other. That's what serial ports were used for, it looks like a weird VGA port with less pins ( usually 9 pins ) and is common on old hardware. This was replaced by USB entirely and you can still use the Rs-232 standard today over USB.
        If you have ever messed around with an Arduino, the IDE's built in serial monitor lets you send and receive text. This is great for sending commands to an arduino like driving a motor or toggling LEDs. I built my own serial monitor with WiFi capabilities and the feature of sending mouse coordinates over serial.
        This custom Serial Monitor uses an RS-232 protocol library made by Teuniz: https://gitlab.com/Teuniz/RS-232.git and uses a nice ImGUI wrapper called Walnut made by TheCherno: https://github.com/StudioCherno/Walnut

        "
        />

        <ImageSection
          title="Retro-Futuristic/90s Cyberpunk Aesthetic" 
          imageUrl="https://www.scuzzy.space/SerialMonitorScreenshot.png"
        />


        <ProjectArticle 
          title="What can I do with it?"
          content="
          I run the Chaffey College Maker Space Club, and we use microcontrollers like the Arduino or the Raspberry Pi Pico for our projects.
          Most of the time we are interfacing with some kind of sensor or motor, and we need a way to command that microcontroller. 
          Debugging on a microcontroller is nice with print statements. Printing happens over serial, so you have to listen in on the com port to read them. It also works the other way, so i can give my program data in strings or byte arrays, whatever i want.
          Microcontrollers have gotten really powerful lately and some even have WiFi Modules built into them. We can move our Serial Communication to be wireless or use modules like an NRF24 Radio Module to further increase wireless communication.
          That's what I've done for my club's project, a Remote controlled car from scratch. We are using my serial monitor to send and receive data to a battery powered circuit. This is built for engineers, and is very hackable. 

          "
          
        />        
        <ProjectArticle 
          title="Remote Controlled Car From Scratch!"
          content="
          There is a suprising ammount of work that goes into making a remote controlled car, especially from the ground up. My club has been working on it for about a month now, and so far we have
           prototyped a battery powered circuit that uses a Pi Pico and an NRF24 module to communicate with the serial monitor. On our end, we also made a custom transmitter that sends whatever we want directly to the battery powered circuit, which we will call the car.
           The pictures shown below are the prototype circuits, and it includes our many attempts. We also made our own custom motor driver and duplicated it for a two wheel drive car. As of writing, the car sucessfully drives motors based on packets sent over radio, and I'm currently
            working on 3D modeling a housing for the car as well as bug fixes and System Architecture for the Microcontroller Firmware.
          "
          
        />
        
        <ProjectArticle 
          title="Issues"
          content="
          Over the course of a month, I've been designing and soldering circuits for the car and ran into all kinds of issues like erronous wiring and battery miscalculations. I also didn't have a motor driver, 
          so We had to make one from scratch. We needed a way to swap the polarity of the motor for direction change, and still maintain the ability to control the duty cycle to maintain control of the speed of the car.
           The Image below is the circuit diagram of the custom motor driver. It uses two relays to handle swapping the polarity, and we maintain control of the speed of the motors with PWM feeding into the MOSFET. 
           Both relay's COMMON Pins are connected to each wire of the motor. One of the relay's Normally Closed pin is tied to 5 volts, and the other relay's normally closed pin is 
            tied to ground THROUGH the MOSFET. A microcontroller uses Pulse Width Modulation (PWM) to command the MOSFET to allow the Relay's Normally closed Pin to reach ground, and depending 
            on how long the duty cycle is, we can directly control the speed of the motor as well as swap polarity entirely though the relays. 
          "
        />
           <ImageSection 
          imageUrl="https://www.scuzzy.space/RelayMotorDriver.jpg"
        />        
        <ImageSection 
          imageUrl="https://www.scuzzy.space/carprototypeboard.jpg"
        />
        <ImageSection 
          imageUrl="https://www.scuzzy.space/remote.jpg"
        />
        <ImageSection
          imageUrl="https://www.scuzzy.space/cardboardcar.jpg"
        />
        
        <ProjectArticle 
          title="In action"
          content="

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

