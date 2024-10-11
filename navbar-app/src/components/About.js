import React from 'react';

function About() {
  const handleAboutAction = () => {
    console.log('About action performed');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleAboutAction}>Perform About Action</button>
    </div>
  );
}

export default About;
