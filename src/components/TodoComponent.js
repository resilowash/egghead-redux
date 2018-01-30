import React, { Component } from 'react';
import {Button, Label, FormControl, ControlLabel, FormGroup, Row, Col, Grid } from 'react-bootstrap';

import { addNewTodo } from '../actions/TodoActions';
import TodoContainer from '../containers/TodoContainer';

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
                value={this.props.todo.newTodo.text}
                placeholder="Enter Todo"
                inputRef={(ref)=>this.todoInput = ref}
                onChange={null}
                />
            </Col>
            <Col md={4}>
                <Button bsStyle="primary" onClick={()=>addNewTodo(null, this.todoInput.value)}>Add Todo</Button>
            </Col>
          </Row>
          <Row>
            <ListComponent data={this.props.todoList}/>
          </Row>
        </Grid>
        </FormGroup>
      </div>
    );
  }
}

class ListComponent extends Component {
  render() {
    return (
      <ol>
      { this.props.data.foreach(function(currentValue, index){
        <li key={currentValue.id}>currentValue.text </li>
      }) }
      </ol>
    );
  }
}

/*
const ListComponent = ({}) => {

}
*/
