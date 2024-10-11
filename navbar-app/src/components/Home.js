import React from 'react';

function Home() {
  const handleClick = () => {
    alert('Home action triggered!');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Home;
