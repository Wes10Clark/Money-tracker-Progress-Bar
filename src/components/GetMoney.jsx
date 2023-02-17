import React from "react";
import {
  FormGroup,
  Form,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const GetMoney = () => {
  const [amount, setAmount] = useState("");
  const [info, setInfo] = useState("");
  const { addLog } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount.trim()) {
      alert("please enter an amount");
      return;
    }
    if (!info.trim()) {
      alert("please enter the info");
      return;
    }

    const newLog = {
      id: Math.floor(Math.random() * 1000000),
      amount,
      info,
    };
    addLog(newLog);
    setAmount("");
    setInfo("");
  };
  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-around">
        <FormGroup className="m-3">
          <div className="d-flex justify-content-center">
            <FormLabel className="text-center">Enter Amount of Money</FormLabel>
          </div>
          <FormControl
            type="number"
            size="lg"
            value={amount}
            placeholder="please enter amount"
            onChange={(e) => setAmount(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="m-3">
          <div className="d-flex justify-content-center">
            <FormLabel className="text-center">Enter Description</FormLabel>
          </div>
          <FormControl
            type="text"
            size="lg"
            value={info}
            placeholder="please enter info"
            onChange={(e) => setInfo(e.target.value)}
          ></FormControl>
        </FormGroup>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Button type="submit" className="btn-dark mt-3">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default GetMoney;
