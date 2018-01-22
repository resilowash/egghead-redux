import React, { Component } from 'react';
import {Button, Label, FormControl, ControlLabel, FormGroup, Row, Col, Grid } from 'react-bootstrap';

import { addNewTodo } from '../actions/TodoAction';

export default class TodoComponent extends Component {
  render() {
    return (
      <div>
        <FormGroup
          controlId="todoForm"
        >
        <Grid>
          <Row>
            <Col md={7}>
              <ControlLabel>Enter Todo: </ControlLabel>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormControl
                type="text"
                value={null}
                placeholder="Enter Todo"
                onChange={null}
                />
            </Col>
            <Col md={4}>
                <Button bsStyle="primary" onClick={()=>addNewTodo(null, 'TEST')}>Add Todo</Button>
            </Col>
          </Row>
        </Grid>
        </FormGroup>
      </div>
    );
  }
}

/*
const ListComponent = ({}) => {

}
*/
