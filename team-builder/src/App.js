import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import TeamMembers from './components/TeamMembers';

function App() {
  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: "tom",
      email: "tom@gmail.com",
      role: "designer"
  }
  ])
  return (
    <div className="App">
        <TeamMembers teamMembersList={teamList} />
     </div>
  );
}

export default App;
