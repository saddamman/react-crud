export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email) {
    return { isValid: false, error: 'Please Enter  Email' };
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid Email Format' };
  }
  return { isValid: true, error: '' };
};

export const validateName = (name) => {
  const nameRegex =
    /^[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?$/;

  if (!name) {
    return { isValid: false, error: 'Please Enter Name' };
  }
  if (!nameRegex.test(name)) {
    return { isValid: false, error: 'Please Enter Valid Name' };
  }
  return { isValid: true, error: '' };
};
