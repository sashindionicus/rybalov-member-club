import React from 'react'

const Member = ({ member }) => {
  return ( 
    <li key={member.id}>{member.id} {member.name} {member.email} {member.date}</li>  
  );
}
 
export default Member;