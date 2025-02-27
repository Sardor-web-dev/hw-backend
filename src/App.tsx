import './App.css';
import { useEffect } from "react";
import { useState } from "react";

interface user {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
}


function App() {
  const [users, setUsers] = useState<user[]>([]);
  const [modal, setModal] = useState(false);
  const [selectedUser, setUser] = useState<user | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res: Response) => res.json())
      .then((res: user[]) => setUsers(res)); 
  }, []);

  return (
    <center>

      {modal && <div className="modal">
        <div className="selected_user">
          <h1>Name: {selectedUser?.name}</h1>
          <p><b>Username:</b> {selectedUser?.username}</p>
          <p><b>Phone number:</b> {selectedUser?.phone}</p>
          <p><b>Gmail adress:</b> {selectedUser?.email}</p>
          <p><b>Website:</b> {selectedUser?.website}</p>
        </div>
        <button onClick={() => { setModal(false); setUser(null) }}>Back</button>
      </div>}
      <div className="userbox">
        {users.map((user) => (
          <div onClick={() => { setModal(true); setUser(user) }} className="User" key={user.id}>
            <p className='p'>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>


    </center>
  );

}

export default App;