import React from 'react';
import './Dashboard.css';
import PeopleList from './PeopleList';
import RoleContainer from './RoleContainer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome Admin
        <img
          src={`${process.env.PUBLIC_URL}/assets/wrench.png`}
          alt="Wrench Icon"
          className="wrench-icon"
        />
      </h1>
      <p>This is your workspace. Drag and Drop the users to their roles.</p>
      
      <div className="main-container">
        <PeopleList />
        <RoleContainer />
      </div>
    </div>
  );
};

export default Dashboard;
