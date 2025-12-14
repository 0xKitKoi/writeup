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

        <CodeSnippet 
          title="No game engine means doing everything yourself"
          code={`
// parent class npc with a virtual update function to override
// Parent NPC class holds a shared pointer to an entity object.
// I loop over all my entities to call their update() functions. This is faster. 
class DoorNPC : public NPC {
  public:
  DoorNPC(std::shared_ptr<Entity> entity, std::string room, Vector2f Location) : NPC(entity, gameState.Text) { // needs a vector to shutup
    m_Location = Location;
    m_room = room;
  }
  // Custom Update Function to act as a level changer
  void Update(float deltaT, SDL_Rect CameraRect, SDL_Rect PlayerPos) override {
    if (m_checked) {
			printf("Loading new room: %s\\n", m_room.c_str());
      gameState.room = m_room; // Updating gameState flags
			gameState.LoadingScreen = true;
      gameState.DoneLoading = false;
      gameState.fade = true;
      gameState.textAvailable;
      gameState.callbackNPC = this;
      m_checked = false;
      gameState.player->SetPosX(m_Location.x); // Only this NPC has this data. Each are unique.
			gameState.player->SetPosY(m_Location.y);
			gameState.player->reset({ m_Location.x, m_Location.y });
    }
  }
};

// This NPC is a sign that displays text when checked by the player. 
class SIGNNPC : public NPC {
  public:
  SIGNNPC(const std::vector<std::string> dialogue, std::shared_ptr<Entity> entity) : NPC(entity, dialogue) {}
  void Update(float deltaT, SDL_Rect CameraRect, SDL_Rect PlayerPos) override {
    if (m_checked) {
      gameState.Text.clear();
      gameState.Text = m_Dialogue;
      gameState.textAvailable = true;
      m_checked = false;

      gameState.textIndex = 0;
      gameState.currentCharIndex = 1; // offset because i need a char to start the animation.
      gameState.textTimer = 0.0f;
      gameState.textAnimating = true;
      gameState.currentDisplayText = gameState.Text[0][0];// "";
      gameState.shouldAnimateText = true;  // This is dialogue, so animate it
      gameState.textAvailable = true;
    }
  }
};   
  `}/>

        <ProjectArticle
        content={`
          You can see the OOP design in the code snippet above. No game engine means I have to tell objects to render. Every frame, the engine goes through a very small vector of Entities, which is a class that all objects in the game have. Each entity has an Update function that handles rendering and various other things like bounds detection and movement. Right now there are two child classes: NPC's and Enemies. The Entity object holds a shared pointer to whatever that entity is, and calls a custom update function tailored to the object and it's needs. This is possible because of virtual functions that are overwritten.
          I can make an entity do anything I want. A custom virtual update function means each entity can do wildly different things, and each NPC can hold their own dialogue system and manipulate the gamestate in different ways.
          `}
        />

        <ImageSection 
          title="So far: "
          imageUrl="https://www.scuzzy.space/qd/POC.gif"
        />

          <ProjectArticle
          content={`
            The game uses a struct of booleans and special variables to manage the game state. NPC's and Enemies can use the gameState Object to decide game logic, like when or if something should happen, and update the gameState themselves usually by triggering flags or healing the player.
            In the Demo GIF you can see the player interacting with menus. This is a custom GUI that tries to mimic Earthbound and Undertales Text based UI System. Some menus like the inventory and the main menu are a text based grid UI. There's a custom UI for in game and in a fight. 
            Speaking of the Text based UI, Dialogue is handled in a really neat way. Each NPC holds a vector of strings and can index this vector based on the Plot points stored in the gameState object, so if an NPC has branching dialogue or is a store the player can buy items from, the logic for each is handled in the NPC's virtual update function themselves. This means each NPC can be completely different from any other NPC and is not limited in any way.
            Collision Detection is implemented as well, Entites like Enemies and NPC's have a POV collsion box that surrounds them and when the player's own collision box intercepts this, the Entity can see the player and react accordingly. Either by LERPing to the players position to start a fight or by simply reacting to the player by starting dialogue or some game story specific actions.
            `}
        />  


        <ProjectArticle
          content={`
            Using Premake5, this project has a nice build system and it's inherently multiplatform, as the only dependancy is SDL2. This means I can compile my game on linux, and very soon, the Nintendo Wii!
            I work on this on and off between studying for my associates degree, so I'm not a full time game dev at the moment. Even so, progress is substantial. 
            `}
        />

        {/*
        <ImageSection 
          title="It's not perfect"
          imageUrl="https://www.scuzzy.space/qd/scuzzygame0-0-1A.png"
          //altText="A beautiful space scene"
        />
        <ProjectArticle 
          title="Okay so there's issues"
          content="
          Development on Windows is going great, but trying to compile on ubuntu didn't go so well. I think it's time to make a build system. Right now, the git repo has the visual solution file.
          "
        />
        */}


        <ProjectArticle 
          title="Conclusion"
          content="Watch development live on twitch at: https://twitch.tv/0xshawncena121"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Game;


