import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import TeamMembers from './components/TeamMembers';
import TeamMemberForm from './components/Forms/Forms';

function App() {
  const [teamList, setTeamList] = useState([
    {
      name: "tom",
      email: "tom@gmail.com",
      role: "designer"
  }
  ])

  const addNewTeamMember = member => {
      setTeamList([...teamList, member])
  }
  return (
    <div className="App">
        <TeamMemberForm addNewTeamMember={addNewTeamMember} />
        <TeamMembers teamMembersList={teamList} />
     </div>
  );
}

export default App;
