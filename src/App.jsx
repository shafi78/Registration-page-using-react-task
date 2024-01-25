import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInput = (e) => {
    setFormData((curr) => {
      return { ...curr, [e.target.name]:[e.target.value] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <>
      <div className="container">
        <form method="get" action="" onSubmit={handleSubmit} className="row">
          <h1 className="mb-5 mt-4 form-label mx-5">Registration</h1>

          <div className="col-6">
            <label htmlFor="fullName" className="form-label float-start">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInput}
              className="form-control mb-2"
              id="fullName"
            />
          </div>

          <br />

          <div className="col-6">
            <label htmlFor="userName" className="form-label float-start">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="userName"
              value={formData.userName}
              onChange={handleInput}
              className="form-control mb-2"
            />
          </div>

          <br />

          <div className="col-6">
            <label htmlFor="email" className="form-label float-start">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className="form-control mb-2"
            />
          </div>

          <br />

          <div className="col-6">
            <label htmlFor="phone" className="form-label float-start">
              Phone Number
            </label>
            <input
              type="phone"
              placeholder="Enter your number"
              name="phone"
              value={formData.phone}
              onChange={handleInput}
              className="form-control mb-2"
            />
          </div>

          <br />

          <div className="col-6">
            <label htmlFor="password" className="form-label float-start">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              className="form-control mb-2"
            />
          </div>

          <br />

          <div className="col-6">
            <label htmlFor="comfirmPassword" className="form-label float-start">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInput}
              className="form-control mb-2"
            />
          </div>

          <br />

          <label htmlFor="gender" className="mt-2">
            Gender
          </label>

          <br />

          <div className="col-8 mt-2">
            <div className="float-start">
              <input
                type="radio"
                name="gender"
                value={formData.gender}
                id="male"
              />
              <label htmlFor="male" className="form-label mx-2">
                Male
              </label>
            </div>

            <div className="float-start mx-5">
              <input
                type="radio"
                name="gender"
                value={formData.gender}
                id="female"
              />
              <label htmlFor="female" className="form-label mx-2">
                Female
              </label>
            </div>

            <div className="float-start">
              <input
                type="radio"
                name="gender"
                value={formData.gender}
                id="not"
              />
              <label htmlFor="not" className="form-label mx-2">
                Prefer not to say
              </label>
            </div>
          </div>
          <br />

          <button type="submit" className="p-1 mt-3 mb-5 col-9 mx-5">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
