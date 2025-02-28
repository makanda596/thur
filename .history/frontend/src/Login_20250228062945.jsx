import { useState } from "react";

const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleLogin = async (e) => {
e.preventDefault();
setMessage("");

try {
    const response = await fetch("https://thurbac.vercel.app/login", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ username, password }),
});

const data = await response.json();
setMessage(data.message);
} catch (error) {
setMessage("Error logging in");
}
};

return (
<div>
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}
        required
        />
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}
        required
        />
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
    </form>
</div>
);
};

export default Login;