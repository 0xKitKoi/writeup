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
          Games like Earthbound, Undertale, and Cavestory heavily inspired me to make something of my own. Much like they inspired many others. My favorite programing content creators all made their own 'game from scratch', so it's time to do this myself.
          But I didn't want to use a game engine. It wouldn't be enough.

	  Which means I have to tell objects to render. Every frame, the engine goes through a vector of Entities, which is a class that all objects in the game have. This entity has an Update function that handles rendering and various other things like bounds detection and movement. Right now there are two child classes: NPC's and Enemies. The Entity object holds a shared pointer to whatever that entity is, and calls a custom update function tailored to the object and it's needs. This is possible because of virtual functions that are overwritten. This does mean that tiny wrapper classes are made in a NPC.cpp or Enemies.cpp but its okay, i dont really care. 
	  what this means is every level has a vector of Entity objects, each with it's own update function and a for loop goes through this vector every frame to update every entity, and thus it's child objects. 
          "
        />

        <CodeSnippet 
          title="No game engine means doing everything yourself"
          code={`
          for (int i = 0; i < Entities.size(); i++) {
						if (Entities[i]->m_Enemy != NULL) {
							if (!Entities[i]->m_Enemy->alive) {			
								for (int j = 0; j < collisionBoxes.size(); j++) {
									if (collisionBoxes[j] == &Entities[i]->m_Collider) {
										// remove the collision box from the list.
										collisionBoxes.erase(collisionBoxes.begin() + j);
									}
								}
								//Entities[i].~shared_ptr(); // not working / not needed ATM
								continue;
							}
						}
            // I have to tell each entity to render in the Update() 
						Entities.at(i)->Update(deltaTime, camera, player.GetCollider());

						// render collision boxes
						SDL_Rect intersectedBox;
						if (SDL_IntersectRect(&Entities.at(i)->m_Collider, &camera, &intersectedBox)) {
							// Adjust box position relative to camera
							SDL_Rect renderBox = {
								Entities.at(i)->m_Collider.x - camera.x,
								Entities.at(i)->m_Collider.y - camera.y,
								Entities.at(i)->m_Collider.w,
								Entities.at(i)->m_Collider.h
							};

							// Draw the box
							SDL_RenderDrawRect(gRenderer, &renderBox);
						}
					}

            `}

        />

        <ImageSection 
          title="So far: "
          imageUrl="https://github.com/0xKitKoi/ScuzzyGame/blob/master/Scuzzy/data/POC.gif"
        />


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
        <ProjectArticle 
          title="Conclusion"
          content="Watch development live on twitch.tv/0xshawncena121"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Game;


