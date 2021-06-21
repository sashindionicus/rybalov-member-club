import Member from "./Member";

const Members = ({ members }) => {
  return (     
    <ul>
      <li># Name Email Registration Date</li>
      {members.map(member => 
        <Member key={member.id} member={member} />
      )}
    </ul>    
  );
}
 
export default Members;