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
        //                             ^----- API for Register
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
    <div>
      <center>
        <div className="container">
          <h3 className="form">
            {" "}
            <b>Register as new User</b>{" "}
          </h3>
          <form className="" action="" onSubmit={onSubmitForm} method="POST">
            <div>
              <label>UserName</label>
            </div>
            <input
              required
              type=""
              placeholder="Enter UserName"
              name="user_name"
              onChange={handleInputChange}
            />
            <br></br>
            <div>
              <label for="Password">Password</label>
              <br></br>
              <input
                required
                type="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                //class="form-group col-sm-5 "
                placeholder="Enter password"
                npm
                name="user_password"
                onChange={handleInputChange}
              />
              <p>
                # Password Must contain at least one number and one uppercase
                and lowercase letter, and at least 8 or more characters
                required.
              </p>
            </div>
            <br></br>
            <div>
              <label for="Age">Age</label>
            </div>
            <input
              required
              type="Age"
              placeholder="Enter Age"
              name="user_age"
              onChange={handleInputChange}
            />{" "}
            <br></br>
            {/* 
        <div>
          <label for="Gender">Gender</label>
          <br></br>

          <input
            type="Gender"
            class="form-group col-sm-5 "
            placeholder="Enter Gender"
            name="user_gender"
            onChange={handleInputChange}
          />
        </div>
        */}
            <br></br>
            <div>
              <label for="Email">Email</label>
            </div>
            <input
              required
              type="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              //class="form-group col-sm-5 "
              placeholder="Enter Email"
              name="user_email"
              onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <div>
              <label for="Gender">Gender</label>
              <br></br>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                name="user_gender"
                onChange={handleInputChange}
              />{" "}
              <label for="male">Male</label> <br></br>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                name="user_gender"
                onChange={handleInputChange}
              />
              <label for="female">Female</label> <br></br>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                name="user_gender"
                onChange={handleInputChange}
              />
              <label for="other">Other / Not to Say</label>
            </div>
            <br></br>
            <div>
              <label for="dod">DateOfBirth</label>
            </div>
            <input
              required
              type="date"
              //class="form-group col-sm-5 "
              placeholder="Enter DOB"
              name="user_dob"
              onChange={handleInputChange}
            />
            <br></br>
            <div>
              <label for="City">City</label>
            </div>
            <input
              required
              type="city"
              // class="form-group col-sm-5 "
              placeholder="Enter City"
              name="user_city"
              onChange={handleInputChange}
            />
            <br></br>
            <div>
              <label for="Mobileno">MobileNo</label>
            </div>
            <input
              required
              type="tel"
              // class="form-group col-sm-5 "
              placeholder="Enter MobileNo"
              pattern="[0-9]{10}"
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
            </div>
          </form>
          <br></br>
          <div class="signinclass">
            <NavLink class="signinclass" to="/login">
              <button className="btn btn-danger">
                <b>Sign in</b>
              </button>
              <h3>For Existing User</h3>
            </NavLink>
          </div>

          <Route path="/login" component={Login}></Route>
        </div>
      </center>
    </div>
  );
};

export default Register;
