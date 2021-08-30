import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import Login from "./Login";
import "./CSS/register.css";

const Register = () => {
  const [Text, setText] = useState({
    user_name: "",
    user_age: "",
    user_gender: "",
    user_email: "",
    user_dob: "",
    user_password: "",
    user_city: "",
    user_mobileno: "",
  });

  const handleInputChange = (e) => {
    //    console.log(e.target.value)
    //    console.log(e.target.name)
    setText({ ...Text, [e.target.name]: e.target.value });
    //    console.log(Text);
  };

  const onSubmitForm = (e) => {
    console.log("submit called");
    e.preventDefault();
    try {
      const body = Text;
      console.log(body);
      const response = fetch("http://localhost:3001/api/v1/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //   console.log(body)
      console.log("called post");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container">
      <h3 className="form">Register as new User</h3>
      <form className="" action="" onSubmit={onSubmitForm} method="POST">
        <div>
          <label>UserName:</label>
        </div>
        <input
          type=""
          placeholder="Enter UserName"
          name="user_name"
          onChange={handleInputChange}
        />

        <div>
          <label for="Password">Password:</label>
          <br></br>

          <input
            type="Password"
            //class="form-group col-sm-5 "
            placeholder="Enter password"
            name="user_password"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label for="Age">Age:</label>
        </div>
        <input
          type="Age"
          placeholder="Enter Age"
          name="user_age"
          onChange={handleInputChange}
        />

        <div>
          <label for="Gender">Gender:</label>
          <br></br>

          <input
            type="Gender"
            //class="form-group col-sm-5 "
            placeholder="Enter Gender"
            name="user_gender"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label for="Email">Email:</label>
        </div>
        <input
          type="Email"
          //class="form-group col-sm-5 "
          placeholder="Enter Email"
          name="user_email"
          onChange={handleInputChange}
        />

        <div>
          <label for="dod">DateOfBirth:</label>
        </div>
        <input
          type="date"
          //class="form-group col-sm-5 "
          placeholder="Enter DOB"
          name="user_dob"
          onChange={handleInputChange}
        />

        <div>
          <label for="City">City:</label>
        </div>
        <input
          type="city"
          // class="form-group col-sm-5 "
          placeholder="Enter City"
          name="user_city"
          onChange={handleInputChange}
        />

        <div>
          <label for="Mobileno">MobileNo:</label>
        </div>

        <input
          type="city"
          // class="form-group col-sm-5 "
          placeholder="Enter MobileNo"
          name="user_mobileno"
          onChange={handleInputChange}
        />
        <br></br>
        <div>
          <br></br>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <br></br>

          <NavLink class="nav-link" to="/login">
            <button className="btn btn-danger"> Sign in</button>
            <h3>For Existing User</h3>
          </NavLink>
        </div>
      </form>
      <Route path="/login" component={Login}></Route>
    </div>
  );
};

export default Register;
