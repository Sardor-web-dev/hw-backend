import "./App.css"
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [modal, setModal]= useState(false);
  const [selectedUser, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => setUsers(res)); // promise x3
  }, []);

  return (
    <center>

      {modal && <div className="modal">
        <div className="selected_user">
          <h1>{selectedUser.name}</h1>
          <p>{selectedUser.username}</p>
          <p>{selectedUser.phone}</p>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.website}</p>
        </div>
        <button onClick={() => {setModal(false); setUser(null)}}>Close modal</button>
      </div>}
      <div className="userbox">
      {users.map((user) => (
        <div onClick={() => {setModal(true); setUser(user)}} className="User" key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.phone}</p>
        </div>
      ))}
      </div>


    </center>
  );

}

export default App;