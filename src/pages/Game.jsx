// src/pages/ProjectPage.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectArticle from '@/components/ProjectArticle';
import CodeSnippet from '@/components/CodeSnippet';
import ImageSection from '@/components/ImageSection';

const Game = () => {
  return (
    <div className="bg-zinc-700 min-h-screen bg-cover bg-center text-zinc-100">
      <Header 
        title="A Scuzzy Game"
        subtitle="A custom game engine in C++ and SDL2"
      />
      
      <main className="container mx-auto px-4 py-12">
        <ImageSection 
          title="making the worst idea ever into a game with no game engine"
          imageUrl="https://www.scuzzy.space/conceptscuzzy1.png"
        />

        <ProjectArticle 
          title="It's a classic"
          content="
          Games like Earthbound, Undertale, and Cave Story heavily inspired me to make something of my own. Much like they inspired many others. But I didn't want to use a game engine. It wouldn't be enough. There seems to be a classic rite of passage for a programmer to make their own game from scratch anyway.
          My favorite programing content creators all made their own 'game from scratch', so it's time to do this myself.

	        "
        />

        <ImageSection 
          title="So far: "
          imageUrl="https://www.scuzzy.space/alleyanim.gif"
        />
        <ProjectArticle
          content={`
            I really liked Unity's update() architecture for game objects, and when I started this project I knew I had to make my own implementation of it, since I'm responsible for efficient code flow. 
            The Main application loop is unlike most hobby game engines, I refuse to make a game class that makes the main file a 4 line file. The main application loop should be the game itself.
            As such, the main loop handles input, calling update functions, and telling objects to render themselves. Each object in the game is an entity, and each entity has a shared pointer to a child class that makes it entirely unique using polymorphism and virtual functions.
            These child classes are either NPC or Enemy. Each has their own virtual update function that is overridden to do whatever that object needs to do. 
            This makes the game very flexible, as I can make each object do whatever I want without being constrained by a rigid engine architecture. Each character can have their own unique behavior and logic, and can effect the gameState object in a very special way. Lets look at some polymorphic examples.
            `}
        />
        <CodeSnippet 
          title="No game engine means doing everything yourself"
          code={`

/// Base Item class https://github.com/0xKitKoi/ScuzzyGame
class Item {
public:
    int m_ItemID = 0; // This is used for saving to a file. 
    std::string m_ItemName = "Default Item Name"; 
    std::string m_ItemDescription = "Default Item Description";
    virtual int Use() { 
        printf("Use() Called on base Item class! This should be overridden!\\n"); 
        return 0; 
    }
    virtual ~Item() = default; // Virtual destructor.
};

class BandAid : public Item { 
public:
    BandAid() {
        m_ItemID = 1;
        m_ItemName = "Band-Aid";
        m_ItemDescription = "A simple band-aid that heals 5 HP.";
    }
    int Use() override { // Overriding the base Item class to make a healing item!
        gameState.HP += 5;
        return 1;
    }
};

class Key : public Item {
public:
    Key() {
        m_ItemID = 2;
        m_ItemName = "Key";
        m_ItemDescription = "A small key that unlocks doors.";
    }
    int Use() override{
        gameState.money += 10;
        return 1;
    }
};
            
  `}/>

        <ProjectArticle
        content={`
          Here's an example of how items are implemented in the game. Each item is a child class of the base Item class, and each item overrides the Use() function to do whatever it needs to do.
          This usually entails modifying the gameState object in some way, like healing the player or triggering a boolean flag stored in the gameState object. 
          This way, the item logic is very simple, I just grab the inventory object in the gameState and call Use(). Nothing Extra, and I can make as many items as I want without changing any other code.
          Entities like NPC's and Enemies work in a similar way.
          `}
        />

        <ImageSection 
          imageUrl="https://www.scuzzy.space/qd/ApplicationFlowChart.png"
        />
        
        <CodeSnippet
          title="Application Flow"
          code={`
            // So heres a condensed psuedocode example of the main application loop
            while (!quit) {
              While(SDL_PollEvent(&e)) {
                // SDL's event handling helps us get keyboard and mouse input
                HandleInput(e); // this gives the Event to the player or the Menu / Fight system.
              }
                // check if we are in a fight or in a menu
                if (inFight) {
                  fightSystem.Update(); // fight system handles its own rendering and input
                } else if (inMenu) {
                  menuSystem.Update(); // menu system handles its own rendering and input
                } else {
                  player.Update(); // player handles its own movement and input
                }
                // If we are in a fight, update the enemy and the player.
                if (inFight) {
                  enemy.Update(); // enemy has to render itself and do its own logic.
                  player.handleEvent(e); // give the player the event to handle movement

                }
                else { // We are not in a fight, so we are in the game world.
                  //render the map
                  Map.Render(camera);
                  // Update all entities in the level:
                  for (auto& entity : Entities) { // vector of Entity shared pointers
                    entity->Update(deltaTime, camera, player.GetCollider()); // The entity calls it's child class update function, Enemy or NPC.
                  }
                }
            } 
            `}
        />
        <ProjectArticle
          content={`
            The way this is currently architected, the main application loop is responsible for handling input, updating the player, updating the enemy, and updating all entities in the game world.
            Think of the application flow like cups with water. The main function fills and conditional statements help guide the water to the lower cups like the player, enemy, fight system, and menu system. Each of these cups then fills their own sub-cups like rendering and logic.
            This way, the main application loop is very flexible and can handle anything that needs to be done in the game. Each system is responsible for its own logic and rendering, and the main loop just guides the flow of the game.
            I believe this is a good way to structure a game without a game engine, as it allows for maximum flexibility and control over the game flow, and more importantly, I'm not making a game class with a 3 line main file.
            `}
        />

        {
          <ProjectArticle
          title="Multiplatform Build System"
          content={`Premake5 is awesome and it lets me avoid writing makefiles or project files for every platform I want to support. I included a premake5.lua file in the git repo that defines the project structure and dependencies.
            I also added some build scripts for windows which downloads SDL2 and sets up the project for Visual Studio.
            Linux is even easier, just install SDL2 development packages and run premake5 to generate makefiles.
            My game is multiplatform by design, the only dependency is SDL2 which is available on all major platforms.\n`}
        />
          }

        <ProjectArticle 
          content= {` Watch development live on twitch at: https://twitch.tv/0xshawncena121 \n https://github.com/0xKitKoi/ScuzzyGame `}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Game;


