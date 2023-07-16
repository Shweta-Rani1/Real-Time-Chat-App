import React from 'react';
import styled from "styled-components";


function register() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("form");
};

const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
<>
    <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
        </FormContainer>

    
    </>
  );
const FormContainer = styled.div``;

export default register;
