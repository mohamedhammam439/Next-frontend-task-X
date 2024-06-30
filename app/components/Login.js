"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const submitUser = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "admin" && password === "123456") {
      router.push("/home");
    } else {
      alert("Wrong username or password");
    }
  };
  return (
    <main className="loginCard">
      <h2>Login </h2>
      <br />

      <form onSubmit={submitUser}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
