import React, { useState, useEffect, memo, useMemo } from "react";

const User = memo(({ user }) => {
  useEffect(() => {
    console.log(`User ${user.name} rerenders`);
  });

  return (
    <span>
      {user.name} - {user.email} - {user.age} lat
    </span>
  );
});

const UserList = ({ users, handleEditUser }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} />
          <button onClick={() => handleEditUser(user.id)}>Edytuj</button>
        </li>
      ))}
    </ul>
  );
};

const UserForm = ({ handleAddUser, handleUpdateUser, editUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser && editUser.id) {
      handleUpdateUser({ name, email, age: parseInt(age, 10) });
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        age: parseInt(age, 10),
      };
      handleAddUser(newUser);
    }

    setName("");
    setEmail("");
    setAge("");
  };

  useEffect(() => {
    console.log("UserForm editUser changed");
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
      setAge(editUser.age);
    }
  }, [editUser]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Imię"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Wiek"
        required
      />
      <button type="submit">
        {editUser ? "Zaktualizuj Użytkownika" : "Dodaj Użytkownika"}
      </button>
    </form>
  );
};

const Stats = memo(({ userStats }) => {
  useEffect(() => {
    console.log("Stats rerenders");
  });

  useEffect(() => {
    console.log("Stats userStats changed");
  }, [userStats]);

  return (
    <>
      <h3>Statystyki Użytkowników</h3>
      <p>Łączna liczba użytkowników: {userStats.totalUsers}</p>
      <p>Średni wiek: {userStats.averageAge}</p>
    </>
  );
});

const UserDataManager = () => {
  const [users, setUsers] = useState([
    { id: "id_1", name: "Siema", age: 100, email: "lolo@lolo.pl" },
  ]);
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleEditUser = (userId) => {
    setEditingUserId(userId);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editingUserId ? { ...updatedUser, id: editingUserId } : user
      )
    );
    setEditingUserId(null);
  };

  // to na wypadek jakby cos wplywalo na render UserManagerData z góry
  const editUser = useMemo(
    () => users.find((u) => u.id === editingUserId),
    [users, editingUserId]
  );

  const userStats = useMemo(() => {
    const totalUsers = users.length;
    const averageAge =
      totalUsers > 0
        ? users.reduce((sum, user) => sum + user.age, 0) / totalUsers
        : 0;
    return {
      totalUsers,
      averageAge: averageAge.toFixed(2),
    };
  }, [users]);

  return (
    <div>
      <h2>Zarządzanie Danymi Użytkowników</h2>
      <UserForm
        handleAddUser={handleAddUser}
        handleUpdateUser={handleUpdateUser}
        editUser={editUser}
      />
      <Stats userStats={userStats} />
      <h3>Lista Użytkowników:</h3>
      <UserList users={users} handleEditUser={handleEditUser} />
    </div>
  );
};

export default UserDataManager;
