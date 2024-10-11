import React from 'react';

function Contact() {
  const handleContactAction = () => {
    alert('Contact action submitted!');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={handleContactAction}>Submit</button>
    </div>
  );
}

export default Contact;
