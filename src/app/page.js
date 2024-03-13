"use client"; // Assurez-vous que ce fichier est traité comme un composant client

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch((error) => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }, []);

  return (
    <div>
      <h1>Utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}