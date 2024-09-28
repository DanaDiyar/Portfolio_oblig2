type HeaderProps = {
    student: String;
    degree: String;
    points: number;
  }
  
  export default function Header(props: HeaderProps) {
    const { student, degree, points } = props;
    return (
      <div>
        <h1 className="student-name">{student} {degree} {points}</h1>
      </div>
    );
  }; 