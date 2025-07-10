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
    <div className="min-h-screen bg-cover bg-center text-zinc-100">
      <Header 
        title="A Scuzzy Game"
        subtitle="A custom game engine in C++ and SDL2"
      />
      
      <main className="container mx-auto px-4 py-12">
        <ProjectArticle 
          title="It's a classic"
          content="
          Games like Earthbound, Undertale, and Cave Story heavily inspired me to make something of my own. Much like they inspired many others. But I didn't want to use a game engine. It wouldn't be enough. There seems to be a classic rite of passage for a programmer to make their own game from scratch anyway.
          My favorite programing content creators all made their own 'game from scratch', so it's time to do this myself.

	        "
        />

        <CodeSnippet 
          title="No game engine means doing everything yourself"
          code={`
          void Entity::Update(float deltaTime, SDL_Rect CameraRect, SDL_Rect PlayerPos)
          {
	          SDL_Rect srcRect;
            // Entities can have a pointer to an Enemy object or an NPC Object
	          if (m_Enemy) {
		          SDL_Rect TargetRect = PlayerPos; // Player's collision box
		          TargetRect.x = TargetRect.x + TargetRect.w / 2;
		          TargetRect.y = TargetRect.y + TargetRect.h / 2;
		          TargetRect.w = TargetRect.w / 2;
		          TargetRect.w = TargetRect.h / 2;
		          m_Enemy->Update(deltaTime, CameraRect, TargetRect); // Lerp to player for fight
	          }
	          if (m_NPC) {
		          m_NPC->Update(deltaTime, CameraRect, PlayerPos);
	          }

	          if (moving) {
		          // Calculates index of frame to use in animation.
		          lastFrameTime += deltaTime * 1000.0f;
		          if (lastFrameTime >= frameDuration) {
			          currentFrameCount = (currentFrameCount + 1) % FRAME_COUNT;
			          lastFrameTime = 0;
		          }
	          }
            
            srcRect = m_Clips[currentFrameCount]; // render the sprite at index of animation
	          m_Collider = { m_PosX, m_PosY, 128, 128 }; 
            // This is a collision box to see the player.
	          m_FOV = { (m_PosX + (m_Collider.w / 2)) - ((128*3)/2) , (m_PosY + (m_Collider.h / 2)) - ((128 * 3) / 2), (int)(currentFrame.w * 3), (int)(currentFrame.h * 3)};

	          //SDL_RenderDrawRect(gRenderer, &m_Collider);
	          m_Texture->render(m_PosX - CameraRect.x, m_PosY - CameraRect.y, &srcRect);
          }
            `}

        />

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


