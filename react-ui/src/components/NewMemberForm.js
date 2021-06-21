const NewMemberForm = ({ addMembersHandler, handleMemberChange, newName, handleEmailChange, newEmail}) => {
    return ( 
        <form onSubmit={addMembersHandler}>
            <h3>New member</h3>
            <div>
                name: <input onChange={handleMemberChange}
                value={newName}
                />
            </div>
            <div>
                email: <input onChange={handleEmailChange} 
                value={newEmail}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
     );
}
 
export default NewMemberForm;