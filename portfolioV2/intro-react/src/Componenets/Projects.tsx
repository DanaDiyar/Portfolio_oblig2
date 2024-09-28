type ProjectProps = {
  title: string;
  category: string;
  index: number;
  removeProject: (index: number) => void;
};

function Project({ title, category, index, removeProject }: ProjectProps) {
  return (
    <div>
      <p>{title} - <strong>{category}</strong></p>
      <button onClick={() => removeProject(index)}>Fjern</button>
    </div>
  );
}

type ProjectsProps = {
  projects: { title: string, category: string }[];
  removeProject: (index: number) => void;
};

export default function Projects({ projects, removeProject }: ProjectsProps) {
  const countByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = 0;
    }
    acc[project.category]++;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            category={project.category}
            index={index}
            removeProject={removeProject}
          />
        ))
      ) : (
        <h3>Ingen prosjekter tilgjengelig</h3>
      )}

      <h3>Totalt prosjekter per kategori:</h3>
      <ul>
        {Object.entries(countByCategory).map(([category, count], index) => (
          <li key={index}>{category}: {count} prosjekter</li>
        ))}
      </ul>
    </div>
  );
}
