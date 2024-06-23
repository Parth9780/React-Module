import React, { useState, useEffect } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    // Fetch data from API or database
    fetch('https://api.example.com/fruits')
      .then(response => response.json())
      .then(data => setFruits(data));
  }, []);

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit.name}</li>
      ))}
    </ul>
  );
}

export default FruitList;