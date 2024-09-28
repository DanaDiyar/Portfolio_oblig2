import React, {useState} from "react";

type ContactProps = {
  email: string;
};

export default function Email(props: ContactProps) {
  const { email } = props;

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    
    if (!name || !message) {
      alert('Vennligst fyll ut alle feltene.');
      return;
    }

    
    const formData = { name, message };
    setSubmittedData(formData);

    
    setName('');
    setMessage('');
  };

  return (
    <footer>
      <p className="email">{email}</p>
      <button onClick={() => alert(`Studentens e-post: dana@hiof.no ${email}`)}>Vis e-post</button>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Navn:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Meldingen:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>

      {submittedData && (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      )}
    </footer>
  );
}