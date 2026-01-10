// src/pages/ProjectPage.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectArticle from '@/components/ProjectArticle';
import CodeSnippet from '@/components/CodeSnippet';
import ImageSection from '@/components/ImageSection';

const Car = () => {
  return (
    <div className="bg-zinc-700 min-h-screen bg-cover bg-center text-zinc-100">
      <Header 
        title="RC Car"
        subtitle="building a remote controlled car from scratch"
      />
      
      <main className="container mx-auto px-4 py-12">

        <ProjectArticle 
          content={`
            So I started a Maker Space club at Chaffey College. I usually have beginners, so I've been teaching my students how to use a breadboard and how to write software for microcontrollers.
            My club wanted to do a club project and we decided to build remote controlled car. I wanted to do it entirely from scratch, so no buying kits or premade components.
            I needed to learn how to make a car and turn it into a teaching moment for my students.
            I started with the electronics. I had some hobby lobby dollar motors and an arduino, so we needed to get some motors spinning.
            `}
        />

        <ProjectArticle 
          content={`
            I didn't have funding for parts at this time, so I had to make my own Motor Driver. We needed one because driving the motors directly is dangerous for the microcontroller.
            Using two relays and a MOSFET, I made a custom motor driver with speed control and direction control. In theory, we can turn the car by driving one motor clockwise and the other counterclockwise.
            Speed is controlled with PWM through the MOSFET. So both pins of the motor go into the COM pins on the relay. The NO pin on one relay goes to VCC, and the other goes to GND through the MOSFET.
            The MOSFET gate is connected to a PWM pin on the Arduino. To drive the car forward, we simply allow the MOSFET to conduct. To reverse, we switch the relays. On relay 2, NC goes to VCC and NO goes to GND through the MOSFET on the first relay.
            To stop the motor, we simply set the PWM duty cycle to 0, and a pulldown resistor pulls the gate low, stopping all power going to the motor. This way, we can control both speed and direction safely.
            `}
        />
        <ImageSection
          title="custom motor driver schematic"
          imageUrl="https://www.scuzzy.space/RelayMotorDriver.jpg"
        />
        <ProjectArticle 
          content={`
            The only problem with the design is the support for only one motor, and duplicating the circuit would be too bulky and simply bad.
            After wrangling with the student government for funding, I got the motor driver IC L298N. This chip supports two motors and has built in H-bridges for direction control.
            It also solves my battery problem, I purchased a 7.4V LiPo battery to power the motors, and the L298N can handle that and supply the microcontroller with 5V through its onboard regulator.
            I also needed to command the car with a remote, so I got an nRF24L01+ transceiver module. This module is cheap and has a good range, perfect for our needs.
            On a prototype board, i wired up the L298N and nRF24L01+ to the Arduino. After some coding, I got the motors spinning and responding to commands from the remote.
            But at this point, my controller was only another Pi Pico and an nRF24L01+. So I bought a PS2 Jotstick module and got to huffing solder fumes.
            `}
        />
        <ImageSection 
          title="the final car prototype"
          imageUrl="https://www.scuzzy.space/carprototypeboard.jpg"
        />
        <ProjectArticle 
          content={`
            So the joystick module has two potentiometers for X and Y axis, and two buttons. I wired the potentiometers to analog pins on the Pi Pico, and the buttons to digital pins with pull-down resistors.
            The Pi Pico reads ints from 0-65535 from the potentiometers, so I normalized them to a range of -1 to 1 (-1, 1) for both axes. The buttons are read as 1 or 0.
            The Pico then packs the 3 values into a struct and sends it over the nRF24L01+ to the car. On the car's side, the Arduino receives the struct and unpacks the values.
            The Y axis controls forward and backward movement, the X axis controls turning, and one button will be for a horn sound effect.
            Driving the car is as simple as taking the normalized value and mapping it to a duty cycle. Seems like I had too much solder fumes because the duty cycle is from 0 to 65535.
            After un-normaling the values and mapping them to the duty cycle, I set the motor speeds accordingly. For turning, I grab the X axis value and adjust the motor speeds inversely.
            For example, if the X axis is 0.5, I reduce the right motor speed by 50% and increase the left motor speed by 50%. This allows for smooth turning.
            `}
          />
        <ImageSection
          imageUrl="https://www.scuzzy.space/remote.jpg"
        />
        <ImageSection
          imageUrl="https://www.scuzzy.space/cardboardcar.jpg"
        />

              
        </main>
      <Footer />
    </div>
  );
};

export default Car;
