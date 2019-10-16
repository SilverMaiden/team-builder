import React from "react";

const TeamMembers = props => {
  console.log("This is from TeamMembers", props);
  return (
    <div className="">
      {props.teamMembersList.map((member) => {
        return (
          <div className="">
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TeamMembers;
