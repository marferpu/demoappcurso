import { useState } from "react";
import DataTable from "../../organisms/DataTable/DataTable";
import Form from "../../organisms/Form/Form";
import Search from "../../organisms/Search/Search";

export default function () {
  const [filteredUsers, setFilteredUsers] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Juan",
      color: "Rojo"
    },
    {
      id: 2,
      name: "Facundo",
      color: "Verde"
    },
    {
      id: 3,
      name: "Daniel",
      color: "Azul"
    }
  ]);

  const addUser = (user) => {
    console.log(user)
    setUsers(users.concat(user));   
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const searchUsers = (q) => {
    console.log(q);
    if (q !== ''){
      const fUsers = users.filter((user) => {
        const name = user.name.trim().toLowerCase();
        const qSearch = q.trim().toLowerCase();
        return name.includes(qSearch) || name.includes(qSearch);
      });
      setFilteredUsers(fUsers);
    } else {
      setFilteredUsers(null);
    }
  }

  return (
    <>
      <div>Visitor Log</div>
      <Search onSearch={searchUsers} />
      <DataTable users={filteredUsers || users} onDelete={deleteUser} />
      <Form addUser={addUser} />
    </>
  );
}
