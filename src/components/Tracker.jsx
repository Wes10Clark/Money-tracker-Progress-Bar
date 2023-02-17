import React, { useContext, useState } from "react";
import {
  Container,
  ProgressBar,
  Form,
  FormLabel,
  Button,
} from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

const Tracker = () => {
  const [max, setMax] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (max < 0) {
      alert("Max cannot be negative");
      return;
    }
    setIsEditing(false);
  };

  const { logs } = useContext(GlobalContext);
  let progress = logs.reduce((total, log) => total + Number(log.amount), 0);
  let variant = "success";
  let progressPercentage = (progress / max) * 100;
  if ((progress / max) * 100 < 40) {
    variant = "danger";
  } else if ((progress / max) * 100 < 70) {
    variant = "warning";
  }
  return (
    <Container className="mb-2 text-center">
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formMax">
            <FormLabel>Max</FormLabel>
            <Form.Control
              type="number"
              value={max}
              onChange={(e) => setMax(parseInt(e.target.value))}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Save
          </Button>
        </Form>
      ) : (
        <div>
          <p> Max: {max}</p>
          <Button variant="dark" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </div>
      )}
      {logs.length > 0 ? (
        <ProgressBar
          className="mt-4"
          now={progress}
          max={max}
          variant={variant}
          label={`${progressPercentage.toFixed(2)}%`}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Tracker;
