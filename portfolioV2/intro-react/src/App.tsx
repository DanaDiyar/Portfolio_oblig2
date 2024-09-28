import Contact from "./Componenets/Contact";
import Experiences from "./Componenets/Experiences";
import Header from "./Componenets/Header";
import Projects from "./Componenets/Projects";
import CreateProject from "./Componenets/CreateProject";
import { useEffect, useState } from "react";



function App() {

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3999/projects");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleAddProject = async (project) => {
    try {
      const response = await fetch("http://localhost:3999/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      setProjects(await response.json());
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Kunne ikke opprette prosjekt: " + error.message);
    }

    useEffect(() => {
      fetchProjects();
    }, []);
  };

  const student = 'Dana Hafzullah';
  const degree = 'Bachelor i Informatikk';
  const points = 180;

  const [projects, setProjects] = useState([
  ]);

  const addProject = (title: string, category: string) => {
    setProjects([...projects, { title, category }]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <main>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Contact email={""} />
      <Projects projects={projects} removeProject={removeProject} />
      <CreateProject onAddProject={handleAddProject} />
    </main>
  );
}



export default App;




