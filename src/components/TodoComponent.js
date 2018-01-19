import React, { Component } from 'react';
import {Button, Label, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';

export default class TodoComponent extends Component {
  render() {
    return (
      <div>
        <FormGroup
          controlId="todoForm"
        >
          <ControlLabel>Enter Todo: </ControlLabel>
          <FormControl
            type="text"
            value={null}
            placeholder="Enter Todo"
            onChange={null}
          />
          <Button bysStyle="primary">Add Todo</Button>
        </FormGroup>
      </div>
    );
  }
}
