type ExperiencesProps = {
  experience: String;
  description: String;
}

export default function Experience({ experience, description }: ExperiencesProps) {
  return (
    <div>
        <h3 className="Experience">{experience}</h3>
        <p className="Description">{description}</p>
      </div>
  );
};