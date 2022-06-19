
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import ProjectCard from './Project.jsx';
import ContactForm from './Contact.jsx';

// Present this website in console
console.log(`
      _._     _,-'""\-.
     (,-.\`.,'(       |\`-/|
         \`-.-' \ )-\`( , o o)
               \`-    \`_\`"'-`);

console.log("\n\nLastly, there is this website, built in React.js with JSX.");
console.log("Find the code at: https://github.com/GandalfTea/web_portfolio");
console.log(".............................................................");



const Introduction = function() {
	return (
		<div className="intro">
			<h1 className="intro_name"><a href="https://github.com/GandalfTea" target="_blank" aria-label="GitHub">Octavian Rusu</a></h1>
			<p className="intro_location"><b>Front End Developer</b></p>
			<img src="./assets/drawing.jpg" className="intro_image" alt="introduction painting" />
			<div>
				<h2 className="intro__des_title">About</h2>
				<p>Working freelance, I have developed and designed a magazine website and real estate presentation websites. Personally, I am working towards a Dataset Marketplace for crowd-sourcing the creation and maintenance of datasets. In my free time, I have also delved into Computer Vision, Computer Graphics and Financial Markets Simulation.</p>
				<p>With an ability to extract and learn  information at a fast rate,  I  often  sink  deep  into various  fields  of  study  and  like  to  <a href="https://github.com/GandalfTea/enginehmw" target="_blank" aria-label="link towards game engine">test  my  knowledge and understanding</a> by creating. <a href="https://en.wikipedia.org/wiki/Richard_Feynman" target="_blank" aria-label="Richard Feynman Quote"><i>What I cannot create I do not understand</i></a>. Having an obsessive personality, I am unwilling to stop working until a satisfying solution is found. I am motivated by understanding, take that as my <a href="https://www.youtube.com/watch?v=vXrpFxHfppI&ab_channel=KingCrimson" target="_blank" aria-label="link towards King Crimson - Epitaph">epitaph</a>.</p>
			</div>
		</div>
	);
}



const TimeEntry = function(props) {
	return <p><strong> {props.start} { props.until!="" ? " - " + props.until + ": " : ": "} {props.title} </strong> {props.description} </p>
}


const Experience = function() {
	return(
		<div className="experience">
			<h3>Work Experience</h3>
            <TimeEntry start="2020" until="2022" title="Front End Developer and Graphic Designer" description=", freelance" />
			<TimeEntry start="2019" until="2021" title="Front End Developer and Graphic Designer" description=", Octav Bancila Highschool, designed and built the magazine website claritatea.ro, designed two volumes of the Claritatea magazine and one volume of the ArtEast magazine." />
			<TimeEntry start="2019" until="" title="Graphic Designer" description="for Mihail Sturdza Emergency Situations Inspectorate, Iasi, Romania" />
			<TimeEntry start="2018" until="2019" title="Graphic Designer" description="for the Erasmus+ program My City, My Home, My Responsibility" />
		</div>
	)
}




const Education = function() {
	return(
		<div className="education">
			<h3>Education</h3>
			<TimeEntry start="2020" until="2022" title="Virtual and Augmented Reality Development" description="BSc (Hons) at the University of Portsmouth, UK" />
			<p>Completed courses such as:</p>
			<ul> 
				<li>UX / UI</li>
				<li>Agile Methodologies</li>
				<li>Mobile Application Development ( <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" aria-label="link to wiki">PWAs</a> )</li> 
				<li><a href="https://en.wikipedia.org/wiki/Extended_reality" target="_blank" aria-label="Wiki">XR</a> Development (Live Facial and Hand Tracking, 
                <a href="https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping" target="_blank" aria-label="link to wiki"> SLAM</a>, 
                <a href="https://immersiveweb.dev/" target="_blank" aria-label="link to wiki"> WebXR</a>, 
                <a href="https://www.unrealengine.com/en-US" target="_blank" aria-label="link to UE4 website"> UE4</a>)</li>
				<li>Math (Multiple View Geometry, Projective and Affine Space, Projective Transformations, Physics Simulation, Tensor Arithmetic, etc.)</li>
                <li>3D Modeling and Animation</li>
			</ul>
		</div>
	)
}




const AdditionalSkills = function() {
	return(
		<div className="skills">
			<h3>Additional Skills</h3>
			<ul>
				<li>Linux and Bash. Can work without a GUI, IDE or through ssh.</li>
                <li>C, C++ and Python</li>
                <li>Git and GitHub</li>
				<li>Raster Illustrations and Digital Art</li>
                <li>Adobe Suite</li>
                <li>Microsoft Suite</li>
				<li>Limited experience with Neural Networks.</li>
			</ul>
		</div>
	)
}


// Use Hook to expand and show all projects. Initially only 3.
const Projects = function() {
	const [open, setOpen] = useState(false);
	var button_src = './assets/expand_arrow.svg';
    var idx = 0;
	if(open) {
		return (
			<div className="projects">
			    <h3>Projects</h3>

				<ProjectCard  title="AI Dataset Marketplace and Crowd-Sourcing" 
                              tech="React.js, JSX, JSON, Webpack, ESLint" 
                              type="html" 
                              htmlname="braket.ai" 
                              filename="DatasetPage.jsx" 
                              git="https://github.com/GandalfTea/braket.ai"
							  description="Work in progress UI/UX." 
                              idx={ idx++ } />

				<ProjectCard title="House Presentation Website" 
                             tech="Three.js, jQuery, Google Maps API, LazyLoad" 
                             link='stejar.casa' 
                             type="images"
                             git="https://github.com/GandalfTea/stejar.casa"
							 description="Presentation done with 3D models, interactive image viewers, etc."
                             idx={ idx++ } />

				<ProjectCard title="Magazine Website with RESTful Admin Panel" 
                             tech="jQuery, REST, Encryption, XD" 
                             link="claritatea.netlify.app/" 
                             type="images"
                             git="https://github.com/GandalfTea/claritatea.ro"
							 description="Showcasing student creations, and keeping contributors updated."
                             idx={ idx++ } />

				<ProjectCard title="Advanced TODO list" 
                             tech="jQuery, QRCode.js, Base64 URL" 
                             link="lists.directory" 
                             type="images" 
                             git="https://github.com/GandalfTea/lists.directory"
							 description="No distractions, instant utility." 
                             idx={ idx++ } />

				<ProjectCard  title="Hyper-Dimensional Object Visualizer in C++ with Web Assembly" 
                              tech="Web Assembly, emscripten. C++, OpenGL" 
                              type="text" 
                              tag="4D" 
                              git="https://github.com/GandalfTea/tinydim"
							  description="Fun project for simulating 4D and Spacetime Manifolds." 
                             idx={ idx++ } />

				<ProjectCard title="Personal Project Blog" 
                             tech="React.js, JSX, Webpack, JSON" 
                             link="louisgeorge.me"  
                             type="images"
							 description="A personal blog / project tracker."
                             idx={ idx++ } />

				<button className="projects_expand_button" onClick={ () => setOpen(false) } aria-label="expand"> 
						<img src= './assets/collapse_arrow.svg' alt="expand button" />
				</button>
			</div>
		);

	} else {
		return (
			<div className="projects">
			    <h2>Projects</h2>
				<ProjectCard  title="AI Dataset Marketplace and Crowd-Sourcing" 
                              tech="React.js, JSX, JSON, Webpack, ESLint" 
                              type="html" 
                              htmlname="braket.ai" 
                              filename="DatasetPage.jsx" 
                              git="https://github.com/GandalfTea/braket.ai"
							  description="Work in progress UI/UX." 
                              idx={ idx++ } />

				<ProjectCard title="House Presentation Website" 
                             tech="Three.js, jQuery, Google Maps API, LazyLoad" 
                             link='stejar.casa' 
                             type="images"
                             git="https://github.com/GandalfTea/stejar.casa"
							 description="Presentation done with 3D models, interactive image viewers, etc."
                             idx={ idx++ } />

				<ProjectCard title="Magazine Website with RESTful Admin Panel" 
                             tech="jQuery, REST, Encryption, XD" 
                             link="claritatea.netlify.app/" 
                             type="images"
                             git="https://github.com/GandalfTea/claritatea.ro"
							 description="Showcasing student creations, and keeping contributors updated."
                             idx={ idx++ } />

				<button className="projects_expand_button" onClick={ () => setOpen(true) } aria-label="expand">
						<img src= './assets/more.svg' alt="close expanded projects" />
				</button>
			</div>
		);
	}
}



const PersonalProjects = function() {
	return(
		<div className="extra-projects">
			<h3>Personal Projects</h3>
			<ProjectCard title="SLAM with Extended Kalman Filter with Symbolic Jacobian Computation" 
                         tech="C++, OpenCV, Pangolin" 
                         type="text" 
                         tag="SLAM"
                         git="https://github.com/GandalfTea/MRCV"
						 description="Simultaneous Localisation and Mapping algorithm with an error-correcting extended kalman filter. It creates a 3D map from a monocular camera. Implemented to test out experimental HMDs." />

			<ProjectCard title="Rudimentary Game Engine with Procedurally Generated Terrain" 
                         tech="C++, OpenGL, GLUT"  
                         type="text" 
                         tag="Engine"
                         git="https://github.com/GandalfTea/enginehmw"
						 description="Game Engine C++ implementation from scratch with Perlin Noise procedurally generated terrain, .OBJ file loader, model viewer, collision detection, primitive generation, etc." />

			<ProjectCard title="Prediction/Financial Market Simulation" 
                         tech="Python, Numpy, Scipy, Pandas"
                         type="text" 
                         tag="Market"
                         git="https://github.com/GandalfTea/slamhmw"
						 description="Simulating typical market behaviour with rational and irrational actors with stock price history datasets and potential idea market implementation with personal system trust variable" />
		</div>
	);
}



const Voluntary = function() {
	return (
		<div className="volunteer">
			<h3>Volunteer Work</h3>
			<TimeEntry start="November 2018" until="" title="Reeducation through torture or reeaducation through culture" 
					   description=" Voluntary at the Community Action at the gymnasium school nr.41 in the Iasi penitentiary" />
			<TimeEntry start="October 2018" until="" title="My City, My Home, My Responsability" description="Erasmus+ partnership project" />
			<TimeEntry start="March 2018" until="" title="Combating violence through art" 
					   description="Voluntary at the community project at the gymnasium school nr.41 in the Iasi penitentiary" />
			<TimeEntry start="January 2018" until="" title="Juvenile delinquency - whose problem is it?" 
					   description="participated at the judging of the epistolary competition and debate." />
			<TimeEntry start="May 2017" until="" title="" 
					   description="Voluntary at the community action at the gumnasium school nr.41 in the Iasi penitentiary" />
			<TimeEntry start="March 2014" until="" title="" description="Participated at the Non-violence festival in Iasi" />
		</div>
	);
}

const Paintings = function() {
	return (
		<div className="paintings">
			<h3>Paintings and Illustrations</h3>
			<img src="./assets/painting-1.jpg" alt="portfolio painting" className="painting" />
			<img src="./assets/painting-2.jpg" alt="portfolio painting" className="painting" />
			<img src="./assets/painting-3.jpg" alt="portfolio painting" className="painting" />
			<img src="./assets/painting-4.jpg" alt="portfolio painting" className="painting" />
			<img src="./assets/painting-5.jpg" alt="portfolio painting" className="painting" />
		</div>
	)
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { extra: false };
        this.project_state = { "braket.ai": false, "claritatea.netlify.app/": false, "stejar.casa": false,
                               "louisgeorge.me": false, "lists.directory": false };
	}
	
	render() {
		var button_src = './assets/more.svg';
		if(this.state.extra) {
			button_src = './assets/collapse_arrow.svg';	
		}

		return(
			<div className="paging">
                <ContactForm />
				<Introduction />
				<Projects />
				<Experience />
				<Education />
				<AdditionalSkills />
				<PersonalProjects />
				{ this.state.extra ? <Voluntary /> : null }
				{ this.state.extra ? <Paintings /> : null }
				<button className="projects_expand_button" onClick={ () => this.state.extra ? this.setState({ extra: false }): this.setState({ extra: true }) } aria-label="expand">
						<img src={ button_src } alt="more information" />
				</button>
				<p className="footer">June 2022, Octavian Rusu</p>
			</div>
		); 
	}
}

render(<Page />, document.getElementById('page'));
