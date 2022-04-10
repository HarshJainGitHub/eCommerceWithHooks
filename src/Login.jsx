import React, { useState, useEffect } from "react";

let Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // runs on inital render and each when state change in this component
  useEffect(() => {
    document.title ="Login - eCommerce";
    console.log("Runs Ever Time");
  });

  // runs on intital render as well as on everytime state change
  useEffect(() => {
    if(email.indexOf("@") > 0){
      console.log("valid");
    }
    else{
      console.log("invalid");
    }
  },[email,password]);

  // runs on inital render time and its same as componentDidMount()
  useEffect(()=>{
    console.log("Inital Render");
  },[]);

  // renders on component unmount phase
  useEffect( ()=> {
    return () => {
      console.log("ComponentWillMount");
    };
  },[]);

  return (
    <div className="row">
      <div className="col-lg-5 col-md-7 mx-auto">
        <div className="card border-success shadow-lg my-2">
          <div className="card-header border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              Login
            </h4>
          </div>

          <div className="card-body border-bottom border-success">
            {/* email starts */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  console.log(email);
                }}
                placeholder="Email"
              />
            </div>
            {/* email ends  */}

            {/* password starts */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  console.log(password);
                }}
              />
            </div>
            {/* password ends  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
