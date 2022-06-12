
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import ProjectCard from './Project.jsx';
import ContactForm from './Contact.jsx';


const Introduction = function() {
	return (
		<div className="intro">
			<h1 className="intro_name">Octavian Rusu</h1>
			<p className="intro_location">Toronto, Canada</p>
			<img src="./assets/drawing.jpg" className="intro_image" />
			<div>
				<h3 className="intro__des_title">About</h3>
				<p>I aim to develop user experiences that constantly evolve and make use of the newest available technologies, but also keep it simple. Coming from a background of traditional art, I am experienced both in design and development. Motivated by understanding, I dive into various fields in my free time and see how everything I learn can be linked into all of my work. Just the other day I was looking at hyperdimensional space and manifolds, and <a href='https://github.com/GandalfTea/tinydim' target="_blank" >built a multi-dimensional geometric primitive visualiser</a>.</p>
				<p>So far, the problems I have tackled and solved include creating the online presence of the Claritatea artistic magazine, designing and currently developing a dataset marketplace that allows users to crowdsource the creation and maintenance of datasets, and building a real-estate presentation website using 3D models. In my free time, I have also delved into Computer Vision, building SLAM algorithms in C++ and Python, Computer Graphics developing a game engine from scratch, and Financial Markets, developing a market simulator.</p>
			</div>
		</div>
	);
}



const TimeEntry = function(props) {
	return <p><strong> {props.start} { props.until!="" ? " - " + props.until + ": " : ": "} {props.title} </strong> {props.description} </p>
}


//<TimeEntry start="2021" until="2022" title="Graphic Design Advisor" description="for Claritatea Magazine" />

const Experience = function() {
	return(
		<div className="experience">
			<h3>Work Experience</h3>
            <TimeEntry start="2022" until="" title="Front End Developer and Designer" description="freelance, in the process of building louisgeorge.me." />
			<TimeEntry start="2019" until="2021" title="Front End Developer and Graphic Designer" description=", Octav Bancila Highschool, designed and built the magazine website claritatea.ro, designed two volumes of the Claritatea magazine and one volume of the ArtEast magazine." />
			<TimeEntry start="2020" until="" title="Front End Developer and Designer" description="freelance, built house presentation website stejar.casa" />
			<TimeEntry start="2019" until="" title="Graphic Designer" description="for Octav Bancila Highschool and Mihail Sturdza Emergency Situations Inspectorate, Iasi, Romania" />
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
				<li>Mobile Application Development</li> 
				<li>Mathematical Elements for Games and Animation (Projective and Affine Space, Projective Transformations, Physics Simulation, Quaternions, etc.)</li>
				<li>Virtual and Augmented Reality Development (Live Player Facial and Hand Tracking, SLAM, WebXR, Unreal Engine)</li>
				<li>Agile Methodologies</li>
				<li>User Experience Design</li>
			</ul>
		</div>
	)
}




const AdditionalSkills = function() {
	return(
		<div className="skills">
			<h3>Additional Skills</h3>
			<ul>
				<li>Proficient at using advanced Linux distros and the Bash terminal. Can work without a GUI, IDE or through ssh (also with X11). I like coding in Vim.</li>
				<li>Advanced knowledge of <strong>C++</strong> and general low-level programming.</li>
				<li>Decent knowledge of <strong>Python</strong> and modules such as numpy, scipy, opencv</li>
				<li>Limited experience with <strong>Neural Networks</strong> and Dataset creation.</li>
				<li>Advanced knowledge of <strong>illustration</strong> and general raster digital art.</li>
			</ul>
		</div>
	)
}


// Use Hook to expand and show all projects. Initially only 3.
const Projects = function() {
	const [open, setOpen] = useState(false);
	var button_src = './assets/expand_arrow.svg';
	if(open) {
		return (
			<div className="projects">

				<ProjectCard  title="AI Dataset Marketplace and Source Control" 
                              tech="React.js, JSX" 
                              type="html" 
                              htmlname="braket.ai" 
                              filename="DatasetPage.jsx" 
                              git="https://github.com/GandalfTea/braket.ai"
							  description="The front-end of a marketplace website that also offers tools for source-control and crowd-sourcing for the creation of new datasets." />

				<ProjectCard title="House Presentation Website" 
                             tech="JS, Three.js, JQuery, Google Maps API" 
                             link='stejar.casa' 
                             type="images"
                             git="https://github.com/GandalfTea/stejar.casa"
							 description="A modern house presentation website with 3D house and terrain model, location with the Google Maps API and embedded structure videos."/>

				<ProjectCard title="Magazine Website with RESTful Admin Panel" 
                             tech="JS, JQuery, REST," 
                             link="claritatea.netlify.app/" 
                             type="images"
                             git="https://github.com/GandalfTea/claritatea.ro"
							 description="A magazine presentation website done for Claritatea. It contains a live news section that is updated from a secured admin panel."/>

				<ProjectCard title="Advanced TODO list" 
                             tech="JS, JQuery, QR code generator, base64 links" 
                             link="lists.directory" 
                             type="images" 
                             git="https://github.com/GandalfTea/lists.directory"
							 description="An advanced shareable todo list with QR code generation, base64 link generation, priority setting, hex input background color change." />

				<ProjectCard  title="Hyper-Dimensional Object Visualizer in C++ with Web Assembly" 
                              tech="C++, Web Assembly, emscripten" 
                              type="text" 
                              htmlname="WORK IN PROGRESS" 
                              git="https://github.com/GandalfTea/tinydim"
							  description="A multi-dimensional object simulator and visualiser written in C++ with OpenGL and GLUT, ported to the web using Web Assembly." />

				<ProjectCard title="Personal Project Blog" 
                             tech="React.js, JSX" 
                             link="louisgeorge.me"  
                             type="images"
							 description="A personal blog / project tracker." />

				<button className="projects_expand_button" onClick={ () => setOpen(false) }> 
						<img src= './assets/collapse_arrow.svg' />
				</button>
			</div>
		);

	} else {
		return (
			<div className="projects">
				<ProjectCard  title="AI Dataset Marketplace and Source Control" 
                              tech="React.js, JSX" 
                              type="html" 
                              htmlname="braket.ai" 
                              filename="DatasetPage.jsx" 
                              git="https://github.com/GandalfTea/braket.ai"
							  description="The front-end of a marketplace website that also offers tools for source-control and crowd-sourcing for the creation of new datasets." />

				<ProjectCard title="House Presentation Website" 
                             tech="JS, Three.js, JQuery, Google Maps API" 
                             link='stejar.casa' 
                             type="images"
                             git="https://github.com/GandalfTea/stejar.casa"
							 description="A modern house presentation website with 3D house and terrain model, location with the Google Maps API and embedded structure videos."/>

				<ProjectCard title="Magazine Website with RESTful Admin Panel" 
                             tech="JS, JQuery, REST," 
                             link="claritatea.netlify.app/" 
                             type="images"
                             git="https://github.com/GandalfTea/claritatea.ro"
							 description="A magazine presentation website done for Claritatea. It contains a live news section that is updated from a secured admin panel."/>

				<button className="projects_expand_button" onClick={ () => setOpen(true) }>
						<img src= './assets/expand_arrow.svg' />
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
		var button_src = './assets/expand_arrow.svg';
		if(this.state.extra) {
			// Change button icon to collapse
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
				<button className="projects_expand_button" onClick={ () => this.state.extra ? this.setState({ extra: false }) 
																																										: this.setState({ extra: true }) }>
						<img src={ button_src } />
				</button>
				<p className="footer">June 2022, Octavian Rusu</p>
			</div>
		); 
	}
}

render(<Page />, document.getElementById('page'));
