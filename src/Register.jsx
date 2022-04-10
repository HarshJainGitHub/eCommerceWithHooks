import React from 'react'
import { useEffect } from 'react';

const Register = () => {

  useEffect( () => {
    document.title = "Register - eCommerce";
  }, []);

  return (
    <div>Register</div>
  )
}

export default Register;