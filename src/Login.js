import React from "react";

export default function Login() {
  return (
    <div className="nothing">
      <div className="page">
        <form>
          <div class="imgcontainer">picture here</div>
          <div className="login">
            <label>Username</label>
            <input type="text" name="name" placeholder="Username or Email" />
          </div>
          <div className="password">
            <label>Password</label>
            <input type="text" name="password" placeholder="Password" />
          </div>
          <button>Sign in</button>
          <div style={{ color: "whitesmoke" }}>Forgot password</div>
        </form>
      </div>
    </div>
  );
}
