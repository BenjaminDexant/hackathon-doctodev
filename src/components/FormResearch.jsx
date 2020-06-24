import React, { useState } from "react";
import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import AlgoliaPlaces from 'algolia-places-react';
import '../style/form.css'


export default function FormResearch() {
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
        <Form.Row >
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><span aria-label="calendrier" role="img">📆</span></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="date"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Veuillez choisir une date.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <InputGroup>
            <AlgoliaPlaces
              type="text"
              placeholder='Votre pays...'
              options={{
                appId: process.env.algoliaID,
                apiKey: process.env.algoliaKey,
                language: 'fr',
                type: 'country',
              }}
              onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => 
              console.log('Fired when suggestion selected in the dropdown or hint was validated.')}
      
              onSuggestions={({ rawAnswer, query, suggestions }) => 
                console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}
        
              onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
                console.log('Fired when arrows keys are used to navigate suggestions.')}
        
              onClear={() => 
                console.log('Fired when the input is cleared.')}
        
              onLimit={({ message }) => 
                console.log('Fired when you reached your current rate limit.')}
        
              onError={({ message }) => 
                console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
              aria-describedby="inputGroupPrepend"
              required/>
            <Form.Control.Feedback type="invalid">
              Veuillez choisir un type de soin.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Form.Row>
        <Button type="submit">Rechercher</Button>
      </Form>
      
    </div>
  );
}