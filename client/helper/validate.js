export const Validation = (name, email, password) => {
  let errors = {};
  const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (name === "") {
    errors.name = "Please fill out your name";
  } else if (!email_pattern.test(email)) {
    errors.email = "Please enter a valid email";
  } else if (password === "") {
    errors.password = "Password field can't be empty";
  }
  return errors;
  // confirm password
  // if(values.confirm_password === "" || values.confirm_password !== values.password){
  //   error.confirm_password = toast.error("Password didn't match")
  // }
};

export const objLength = (obj) => {
  return Object.keys(obj).length;
};
