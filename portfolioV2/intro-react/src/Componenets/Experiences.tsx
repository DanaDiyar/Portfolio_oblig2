import Experience from "./Experience";

  
  export default function Experiences() {
    const experiences: any[] = [
      
      {experience: "Figma brukergrensesnitt designer for kunde X",
        description: "Lorem Ipsum"},
      
      {experience: "Webside utvikler for kunde Y",
        description: "Lorem Ipsum"},
      
        {experience: "Kundeservice i buttikk",
        description: "Lorem Ipsum"},
    ];

  
    
    return (
      <div>
        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <Experience key={index} experience={exp.experience} description={exp.description}/>
          ))
        ) : (
          <p>Ingen erfaringer</p>  
        )}
      </div>
    );
  }
