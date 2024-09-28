import React, { useState } from "react";

type CreateProjectProps = {
  onAddProject: (project: {
    title: string;
    description: string;
    createdAt: string;
    category: string;
  }) => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!title || !description || !createdAt || !category) {
      alert("Alle feltene må fylles ut.");
      return;
    }

    onAddProject({ title, description, createdAt, category });

    
    setTitle("");
    setDescription("");
    setCreatedAt("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="create-project-form">
      <label htmlFor="title">Prosjekttittel:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Skriv prosjekttittel"
      />

      <label htmlFor="description">Beskrivelse:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Skriv beskrivelse"
      />

      <label htmlFor="createdAt">Dato:</label>
      <input
        type="date"
        id="createdAt"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
      />

      <label htmlFor="category">Kategori:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Skriv kategori"
      />

      <button type="submit">Opprett Prosjekt</button>
    </form>
  );
};

export default CreateProject;