import React, { useState } from 'react';
import './PeopleList.css';

const people = [
  { id: 1, name: "Angelika Thomas", image: "/assets/person1.png" },
  { id: 2, name: "Aisha Tanaka", image: "/assets/person3.png" },
  { id: 3, name: "Luca Rossi", image: "/assets/person4.png" },
    { id: 4, name: "Chen Wei Li", image: "/assets/person5.png" },
  { id: 5, name: "Ethan James", image: "/assets/person.png" },
  { id: 6, name: "Maya Taylor", image: "/assets/person6.png" },
  { id: 7, name: "Alex Russo", image: "/assets/person7.png" },
];

const PeopleList = () => {
  const [dragging, setDragging] = useState(false);  // Track dragging state

  const handleDragStart = (e, person) => {
    setDragging(true);  // Set dragging state to true
    e.dataTransfer.setData('person', JSON.stringify(person));  // Store the person data
    e.dataTransfer.setDragImage(new Image(), 0, 0); // Hide default drag image
  };

  const handleDragEnd = () => {
    setDragging(false);  // Set dragging state to false when drag ends
  };

  return (
    <div className="people-list">
      {people.map((person) => (
        <div
          key={person.id}
          className={`people-item ${dragging ? 'dragging' : ''}`}  // Apply dragging class
          draggable
          onDragStart={(e) => handleDragStart(e, person)}
          onDragEnd={handleDragEnd}
        >
          <div
            className="people-image"
            style={{ backgroundImage: `url(${person.image})` }}
          ></div>
          <div className="people-name">{person.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
