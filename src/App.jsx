import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Header Section */}
      <header className="header">
        <h1>Your Name</h1>
        <p className="tagline">Aspiring Full-Stack Developer</p>
      </header>

      {/* About Me Section */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am currently learning full-stack web development and improving my
          skills by working on real-world projects. I enjoy exploring new
          technologies and enhancing my knowledge in JavaScript, React, and
          backend development. My goal is to become a professional developer who
          builds impactful applications that solve real problems.
        </p>
      </section>

      {/* Hobbies & Interests Section */}
      <section className="section">
        <h2>Hobbies & Interests</h2>
        <ul>
          <li>
            <strong>Reading:</strong> I enjoy reading fiction and motivational
            books that help me gain new perspectives.
          </li>
          <li>
            <strong>Music:</strong> Listening to music helps me relax and stay
            focused during work.
          </li>
          <li>
            <strong>Coding Projects:</strong> I love experimenting with small
            coding challenges and creating creative apps.
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React Basics</li>
          <li>Communication Skills</li>
        </ul>
      </section>

    </div>
  );
}

export default App;