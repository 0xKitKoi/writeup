// src/pages/ProjectPage.js
import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectArticle from '@/components/ProjectArticle';
import CodeSnippet from '@/components/CodeSnippet';
import ImageSection from '@/components/ImageSection';

const FORM = () => {
  return (
    <div className="min-h-screen bg-cover bg-center text-zinc-100">
      <Header 
        title="College Club SignUp Form"
        subtitle="Why use google forms when I can make my own?"
      />
      
      <main className="container mx-auto px-4 py-12">
        <ProjectArticle 
          title="I'm making a club!"
          content="So I wanted to use a 3D printer for my laser turret. I asked my college if I could use one of theirs, and they declined as 'its only for students in a specific engineering class'.
          I took matters into my own hands and made a maker space club. I was tired of not having one near me, and I couldn't join the computer science club as the meeting times directly conflicted with my calculus class.
          My college hosted a club rush, and I signed up for a table. I set up a raspberry pi with a laser turret I made, and let students mess around with a breadboard with some buttons and a potentiometer controlling an LED
          People seemed to love it. Around 30 students took fliers and since I only brought 5, I had to print more. Much more. 12 students signed up using my form at the club rush event, So I'd call that a success.

	  "
        />

        <ProjectArticle 
          title="My own Google Form"
          content="
          So my college sent me an email about the club rush I signed up for telling me to bring a piece of paper for students to sign up with. I was asked to take the student's ID along with their email and name.
          I immediately thought no, its 2025. I need a web page for this. I'm a software dev and I host my own server. And I ain't using no google forms. And I want to do front end properly. 
          To youtube I went to study React, and in 3 hours I spun up a web form on my server and got a nice frontend. I made a nice PHP backend to save the form data to an SQLite3 database, and got
          an art student to make the nice images on the site. Heres how that sends it:
	        "
        />
        
        <CodeSnippet 
          title="Uploading form data to a PHP Backend"
          code="

	const handleSubmit = async (event) => {
    event.preventDefault();as
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Data saved successfully');

      // Show QR code and link
      setSubmitted(true);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

		"
        />

	<CodeSnippet 
	title="Saving it to a DB"
	code={`
	
	try {
    		$db = new PDO("sqlite:$db_path");
    		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    		$data = json_decode(file_get_contents("php://input"), true);

    		$stmt = $db->prepare("INSERT INTO form_submissions (input1, input2, input3, input4) VALUES (:input1, :input2, :input3, :input4)");
    		$stmt->execute([
        		':input1' => $data['input1'],
        		':input2' => $data['input2'],
        		':input3' => $data['input3'],
        		':input4' => $data['input4']
    		]);

    		echo json_encode(["message" => "Data saved successfully"]);
	} catch(PDOException $e) {
    		echo json_encode(["error" => "Database error: " . $e->getMessage()]);
	}

	`}
	/>

	<ProjectArticle
	content="
	It's simple, it stores what I need it to, its nice and pretty, and maybe the club can come together and try to hack it later. It's perfect. 
	"
	/>

      <ProjectArticle 
          title="Are you a student at Chaffey College?"
          content="
          Want to join a club full of makers? It's coming soon this fall semester! sign up now using the QR code below or this link: https://www.scuzzy.space/codingclub/

	        "
      />
      <ImageSection
        title={"SignUp Form"}
        imageUrl={"https://www.scuzzy.space/qd/codingclubqr.png"}
      />
        

      </main>
      
      <Footer />
    </div>
  );
};

export default FORM;

