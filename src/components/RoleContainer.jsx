import React, { useState } from "react";
import './RoleContainer.css';

const RoleContainer = () => {
  const [assignedRoles, setAssignedRoles] = useState({
    leader: null,
    role1: null,
    role2: null,
    role3: null,
    role4: null,
    role5: null,
    role6: null,
  });

  const [candidates, setCandidates] = useState([
    { id: 1, name: "Angelika Thomas", image: "/assets/person1.png" },
    { id: 2, name: "Aisha Tanaka", image: "/assets/person3.png" },
    { id: 3, name: "Luca Rossi", image: "/assets/person4.png" },
      { id: 4, name: "Chen Wei Li", image: "/assets/person5.png" },
    { id: 5, name: "Ethan James", image: "/assets/person.png" },
    { id: 6, name: "Maya Taylor", image: "/assets/person6.png" },
    { id: 7, name: "Alex Russo", image: "/assets/person7.png" },

  ]);

  const handleDrop = (e, role) => {
    e.preventDefault();
    const person = JSON.parse(e.dataTransfer.getData("person"));


    if (Object.values(assignedRoles).some((assigned) => assigned?.id === person.id)) {
      alert(`${person.name} is already assigned to a role!`);
      return;
    }

    setCandidates((prevState) => prevState.filter((candidate) => candidate.id !== person.id));

    setAssignedRoles((prevState) => ({
      ...prevState,
      [role]: person,
    }));
  };

  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  
  const handleDragStart = (e, candidate) => {
    e.dataTransfer.setData("person", JSON.stringify(candidate));
  };

  return (
    <div className="role-container">
      <div className="pyramid-container">
        <div
          className="role-block leader"
          onDrop={(e) => handleDrop(e, "leader")}
          onDragOver={handleDragOver}
        >
          {assignedRoles.leader ? (
            <div>
              <img src={assignedRoles.leader.image} alt={assignedRoles.leader.name} className="role-icon" />
              {assignedRoles.leader.name}
            </div>
          ) : (
            "Team-Lead"
          )}
        </div>
        <div className="role-blocks">
          <div
            className="role-block"
            onDrop={(e) => handleDrop(e, "role1")}
            onDragOver={handleDragOver}
          >
            {assignedRoles.role1 ? (
              <div>
                <img src={assignedRoles.role1.image} alt={assignedRoles.role1.name} className="role-icon" />
                {assignedRoles.role1.name}
              </div>
            ) : (
              "Front-End Dev"
            )}
          </div>
          <div
            className="role-block"
            onDrop={(e) => handleDrop(e, "role2")}
            onDragOver={handleDragOver}
          >
            {assignedRoles.role2 ? (
              <div>
                <img src={assignedRoles.role2.image} alt={assignedRoles.role2.name} className="role-icon" />
                {assignedRoles.role2.name}
              </div>
            ) : (
              "Back-End Dev"
            )}
          </div>
        </div>
        <div className="role-blocks">
          <div
            className="role-block"
            onDrop={(e) => handleDrop(e, "role3")}
            onDragOver={handleDragOver}
          >
            {assignedRoles.role3 ? (
              <div>
                <img src={assignedRoles.role3.image} alt={assignedRoles.role3.name} className="role-icon" />
                {assignedRoles.role3.name}
              </div>
            ) : (
              "Designer"
            )}
          </div>
          <div
            className="role-block"
            onDrop={(e) => handleDrop(e, "role4")}
            onDragOver={handleDragOver}
          >
            {assignedRoles.role4 ? (
              <div>
                <img src={assignedRoles.role4.image} alt={assignedRoles.role4.name} className="role-icon" />
                {assignedRoles.role4.name}
              </div>
            ) : (
              "Testing"
            )}
          </div>
          <div
            className="role-block"
            onDrop={(e) => handleDrop(e, "role5")}
            onDragOver={handleDragOver}
          >
            {assignedRoles.role5 ? (
              <div>
                <img src={assignedRoles.role5.image} alt={assignedRoles.role5.name} className="role-icon" />
                {assignedRoles.role5.name}
              </div>
            ) : (
              "Analyst"
            )}
          </div>
          <div
            className="role-block"
            onDrop={(e) => handleDrop(e, "role6")}
            onDragOver={handleDragOver}
          >
            {assignedRoles.role6 ? (
              <div>
                <img src={assignedRoles.role6.image} alt={assignedRoles.role6.name} className="role-icon" />
                {assignedRoles.role6.name}
              </div>
            ) : (
              "Marketing"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleContainer;
