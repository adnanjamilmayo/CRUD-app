import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate()

  const header = { "Access-control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicme");
    axios.post("https://65e28117a8583365b31836c3.mockapi.io/crud-app", {
      name: name,
      email: email,
    })
    .then(()=>{
      history("/read")
    })
  };

  return (
    <>
    <div className="d-flex justify-content-between">
      <h2>Create</h2>
      <Link to={"/read"}>
      <button className="btn btn-primary">Show Data</button>
      </Link>
      </div>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Create;
