import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = (data) => {
    console.log({
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
    });
    alert(JSON.stringify(data));
  };

  const EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const FirstNameRegex = /^[a-zA-Z]{3,}$/;
  const LastNameRegex = /^[a-zA-Z]{3,}$/;

  return (
    <>
      <div></div>
      <h1>react-hook-form Example</h1>
      <div className="card">
        <form onSubmit={handleSubmit(Submit)} className="formStyle">
          <input
            {...register("FirstName", {
              validate: (value) => FirstNameRegex.test(value),
            })}
            placeholder="First Name"
          />
          {errors.FirstName && <p>Enter a valid First name!</p>}

          <input
            {...register("LastName", {
              validate: (value) => LastNameRegex.test(value),
            })}
            placeholder="Last Name"
          />
          {errors.LastName && <p>Enter a valid Last name!</p>}

          <input
            {...register("Email", {
              validate: (value) => EmailRegex.test(value),
            })}
            placeholder="Email"
          />
          {errors.Email && <p>Enter a valid Email address!</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
