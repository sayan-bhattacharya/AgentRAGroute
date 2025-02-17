function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Sayan Bhattacharya</h1>
                <h2>Machine Learning Engineer</h2>
                <p>Building the future with AI and Machine Learning</p>
            </div>
        </section>
    );
}

function Projects() {
    const projects = [
        {
            title: "Agent router - AI Agent Builder",
            description: "An advanced AI meta-agent using LangGraph + Pydantic AI for multi-agent orchestration and planning. Features include multi-agent workflow, specialized agents for reasoning, and RAG-based question answering.",
            link: "https://github.com/yourusername/archon",
            demo: true // Add this flag to indicate it has a live demo
        },
        // Add more projects here
    ];

    return (
        <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="flex gap-4">
                                <a href={project.link} className="btn">View Project</a>
                                {project.demo && (
                                    <a href="#demo" className="btn btn-secondary">Try Demo</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Add the AI Agent Builder demo section */}
            <div id="demo" className="mt-16">
                <AIAgentBuilder />
            </div>
        </section>
    );
}

function Skills() {
    const skills = {
        "Programming Languages": ["Python", "Matlab", "Javascript", "Typescript", "C#", "C++"],
        "Deep Learning": ["TensorFlow", "Keras", "PyTorch", "LLM"],
        "ML Libraries": ["transformers", "sklearn", "PySpark", "Pandas", "Numpy"],
        "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes"]
    };

    return (
        <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-category">
                        <h3>{category}</h3>
                        <ul>
                            {items.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="section">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-form">
                <div className="form-group">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Message"></textarea>
                </div>
                <button className="btn">Send Message</button>
            </div>
        </section>
    );
}

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
