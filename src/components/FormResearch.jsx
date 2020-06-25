import React, { useState } from "react";
import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import AlgoliaPlaces from 'algolia-places-react';
import { Typeahead } from 'react-bootstrap-typeahead';
import MediaQuery from 'react-responsive';
import Popup from './Popup';
import hackathon from '../hackathon.json';
import '../style/form.css';

export default function FormResearch({setInfoReasearch}) {
  const [selectCateg, setCateg] = useState([]);
  const [selectHealthType, setHealthType] = useState([]);
  const [selectCountry, setCountry] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  
  const handleSubmit = e => {
    e.preventDefault();
    if(selectCateg.length!==0 && selectHealthType.length!==0 && selectCountry.length!==0){
      setInfoReasearch({country:selectCountry, healthCare:selectHealthType, categ:selectCateg});
    }else{
      setModalShow(true);
    }
  }
 
  let allData = Object.entries(hackathon.categorie);
  let getCateg = allData.map(el => el[0].replace(/_/g, " "))
  getCateg = getCateg.map(el => el[0].toUpperCase() + el.slice(1))

  let getHealthType = allData.map(el => Object.keys(el[1].type_de_soin))
  getHealthType = getHealthType[0]
  getHealthType = getHealthType.map(el => el.replace(/_/g, " "))
  getHealthType = getHealthType.map(el => el[0].toUpperCase() + el.slice(1))
  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="formResearch">
        <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Choisissez votre catégorie</Form.Label>
            <Typeahead
              id="chooseCateg"
              labelKey="Categ"
              onChange={setCateg}
              options={getCateg}
              placeholder="Choisissez votre catégorie..."
              selected={selectCateg}
              required
            />
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom02">
          <Form.Label>Choisissez votre prestation</Form.Label>
          <Typeahead
            id="chooseHealthType"
            labelKey="HealthType"
            onChange={setHealthType}
            options={getHealthType}
            placeholder="Choisissez votre type de prestation..."
            selected={selectHealthType}
            required
          />
        </Form.Group>
        <Form.Row >
          <Form.Group as={Col} lg="5" controlId="validationCustomUsername">
            <Form.Label>Votre date de départ :</Form.Label>
            <InputGroup>
              <Form.Control
                type="date"
                aria-describedby="calendar"
                required
              />
            </InputGroup>
          </Form.Group>
          <MediaQuery minWidth={992}>
            <Form.Group as={Col} md="2">
            </Form.Group>
          </MediaQuery>
          <Form.Group as={Col} lg="5" controlId="validationCustom02">
            <Form.Label>Votre pays d'origine :</Form.Label>
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
                  setCountry(suggestion.value)
                }
        
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
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Rechercher</Button>
      </Form>
      <Popup 
        text="Veuillez remplir tous les champs" 
        titre="Attention!" 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}