import React, { useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function FormRearch() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group md="4" controlId="validationCustom01">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Catégorie</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Catégorie..."
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Veuillez choisir une catégorie.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom02">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Type de soin</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Soin..."
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Veuillez choisir un type de soin.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustomUsername">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><span aria-label="calendrier" role="img">📆</span></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Date"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Veuillez choisir une date.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button type="submit">Rechercher</Button>
      </Form>
    </div>
  );
}