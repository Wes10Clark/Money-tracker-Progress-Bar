import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import DisplayItem from "./DisplayItem";

const Display = () => {
  const { logs } = useContext(GlobalContext);
  if (logs.length >= 1) {
    return (
      <Container fluid className="pt-2 bg-secondary">
        <div className="d-flex justify-content-around">
          <h3>Remove Item</h3>
          <h3>amount of money</h3>
          <h3>item description</h3>
        </div>
        <div>
          {logs.map((log) => {
            return <DisplayItem log={log} key={log.id} />;
          })}
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default Display;
