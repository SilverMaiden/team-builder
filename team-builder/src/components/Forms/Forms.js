
import React, { useState } from "react";

const TeamMemberForm = props => {
  // console.log("this is our props",props);
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });
  const changeHandler = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value});
    console.log(teamMember);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewTeamMember(teamMember);
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="name"
        onChange={changeHandler}
        value={teamMember.name}
      />
      <label htmlFor="email">Email</label>
      <textarea
        name="email"
        id="email"
        placeholder="email"
        onChange={changeHandler}
        value={teamMember.email}
      />
      <label htmlFor="role">Role</label>
      <textArea
        name="role"
        id="role"
        placeholder="role"
        onChange={changeHandler}
        value={teamMember.role}
        />

      <button type="submit">Add Note</button>
    </form>
  );
};

export default TeamMemberForm;
