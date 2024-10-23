import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validateName } from "../../lib/utils/validations";
import { postUserDetails, updateUserDetails } from "../../features/crudAction";
import { generateRandomId } from "../../lib/utils/generateRandomId";
import { toast } from "react-toastify";

function CrudForm({ onClick, updateItem }) {
  const dispatch = useDispatch();
  const { userDataList } = useSelector((state) => state.crud);
  const [userInput, setUserInput] = useState({ name: "", email: "" });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (updateItem) {
      setUserInput(updateItem);
    }
  }, [updateItem]);

  const getValidationFunction = (name) => {
    return name === "name"
      ? validateName
      : name === "email"
      ? validateEmail
      : () => ({ isValid: true, error: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    const { isValid, error } = getValidationFunction(name)(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: isValid ? "" : error,
    }));
    return isValid;
  };

  const validateForm = () => {
    return Object.keys(userInput).every((key) => {
      return validateInput(key, userInput[key], getValidationFunction(key));
    });
  };

  const checkEmailAlreadyExist = (email) => {
    return userDataList.some((user) => user.email === email);
  };

  const onSumbitForm = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill all input fields!", {
        toastId: "errorInputs",
        autoClose: 1000,
      });
      return;
    }
    if (updateItem) {
      dispatch(updateUserDetails({ id: updateItem.id, ...userInput }));
    } else if (checkEmailAlreadyExist(userInput.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email already exists!",
      }));
      return;
    } else {
      const userId = generateRandomId();
      dispatch(postUserDetails({ id: userId, ...userInput }));
    }
    console.log("Form submitted successfully!");
    onClick();
  };

  return (
    <>
      <header className="mb-4">
        <b>{updateItem ? "Update User Details" : "Add User Deatils"} </b>
      </header>
      <form onSubmit={onSumbitForm}>
        <div className="mb-3 space-x-4 flex items-center justify-center">
          <label htmlFor="name" className="w-1/4 text-sm">
            Name
          </label>
          <div className="w-full">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="name"
              value={userInput.name}
              className="px-3 py-2 bg-white border border-zinc-900/10 shadow-sm font-normal placeholder-slate-400 disabled:bg-slate-5 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none block rounded-md w-full sm:text-sm focus:ring-blue-500/20 focus:border-blue-500 focus:ring-4 focus:invalid:border-pink-500/20 focus:invalid:ring-pink-500/20 disabled:shadow-none"
              placeholder="Enter name..."
            />
            {errors.name && (
              <p className="text-xs text-red-700 mt-2">{errors.name}</p>
            )}
          </div>
        </div>
        <div className="mb-3 space-x-4 flex items-center justify-center">
          <label htmlFor="email" className="text-sm w-1/4">
            Enter Email
          </label>
          <div className="w-full">
            <input
              type="email"
              name="email"
              id="email"
              value={userInput.email}
              onChange={handleChange}
              className="px-3 py-2 font-normal bg-white border border-zinc-900/10 shadow-sm  placeholder-slate-400 disabled:bg-slate-5 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none block rounded-md w-full sm:text-sm focus:ring-blue-500/20 focus:border-blue-500 focus:ring-4 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500/20 disabled:shadow-none"
              placeholder="Enter email..."
            />
            {errors.email && (
              <p className="text-xs text-red-700 mt-2">{errors.email}</p>
            )}
          </div>
        </div>
        <button type="submit" className="bg-pink-600 text-white text-sm">
          {updateItem ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
}

export default CrudForm;
