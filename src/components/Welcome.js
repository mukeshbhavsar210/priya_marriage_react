import React, { useState, useEffect } from "react";

export default function Welcome() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

    return (
        <div>           
            <h1>Welcome to Priya's Marriage</h1>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} years old
                </li>
                ))}
            </ul>

            <ul>
                {products.map((user) => (
                <li key={user.id}>
                    {user.name} {user.category} {user.price} 
                </li>
                ))}
            </ul>
        </div>
    )
}