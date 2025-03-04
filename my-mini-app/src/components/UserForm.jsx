import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://192.168.0.138:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();
    alert(data.message); // Show success message
    setName(""); // Clear input field
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          style={{ padding: "10px", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
