import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function SignUpForm() {
  const [formObject, setFormObject] = useState({
    username: '',
    password: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    var obj = {};
    obj[name] = value;
    setFormObject({ ...formObject, [name]: value });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('sign-up-form, username:', formObject.username);
    API.saveUser({
      username: formObject.username,
      password: formObject.password
    });
  }

  return (
    <div class="wrapper fadeInDownSignUp">
      <div class="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Register</h2>
          <p class="hint-text">
            Create your account. It's free and only takes a minute.
          </p>
          <div class="form-group">

          </div>
          <div class="form-group">
            <input
              value={formObject.username}
              onChange={handleInputChange}
              type="username"
              class="form-control"
              name="username"
              placeholder="Username"
              required="required"
              data-fillr-id="1081205151"
              data-fillr="bound"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              value={formObject.password}
              onChange={handleInputChange}
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              required="required"
              data-fillr-id="938218994"
              data-fillr="bound"
              autocomplete="off"
            />
          </div>
      
          <div class="form-group">
            <button disabled={!(formObject.username && formObject.password)} onClick={handleFormSubmit} type="submit" class="btn btn-success btn-lg btn-block">
              Register Now
            </button>
          </div>
        </form>

        <div class="text-center">
          Already have an account? <Link to = "/" >Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
