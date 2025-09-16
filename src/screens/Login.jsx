import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token); // Save token
      window.location.href = "/manage-blogs"; // redirect
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column",textAlign:"center",height:"500px",fontFamily:"poppins",justifyContent:"center",alignItems:"center"}}>
      <h2 style={{fontWeight:"700"}}>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}

      /><br />
      <button 
        style={{border:"1px solid black",padding:"1%",borderRadius:"8px",margin:"1%"}}
      onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
