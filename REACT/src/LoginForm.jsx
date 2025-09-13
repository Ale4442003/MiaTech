import { useState } from "react";

export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(event) => {
        event.preventDefault();
        alert(`Username: ${username}, Password:${password}`);
    };

    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Insert username"
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Insert password"
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );

}