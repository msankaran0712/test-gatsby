import React from 'react';
import { Form } from '@trimbleinc/modus-react-bootstrap';
import '../src/assets/css/main.scss';



export const App = (props) => { 
  return (
    <div className="App">
      <Form>
        <div key="custom-checkbox">
          <Form.Check
            custom
            type="checkbox"
            id="custom-checkbox"
            label="Checkbox"
          />
          <Form.Check
            custom
            type="checkbox"
            id="custom-checkbox"
            label="Checkbox"
            checked
          />
          <Form.Check
            custom
            type="checkbox"
            id="custom-checkbox"
            label="Checkbox"
            disabled
          />
        </div>
        <IndeterminateCheckbox id="test" indeterminate={true} />
      </Form>
    </div>
  );
}

