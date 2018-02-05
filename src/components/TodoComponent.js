import React, { Component } from 'react';
import {Button, Label, FormControl, ControlLabel, FormGroup, Row, Col, Grid, Glyphicon } from 'react-bootstrap';

import { addNewTodo } from '../actions/TodoActions';
//import TodoContainer from '../containers/TodoContainer';


export default class TodoComponent extends Component {
  render() {
    return (
      <div>
        <h2><Glyphicon glyph="tower" /> My Todo List App </h2>
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
                value={this.newTodo}
                placeholder="Enter Todo"
                inputRef={(ref)=>this.todoInput = ref}
                onChange={null}
                />
            </Col>
            <Col md={4}>
                <Button bsStyle="primary" onClick={ () => this.props.addTodo(null, this.todoInput.value) }>Add Todo</Button>
            </Col>
          </Row>
          <Row>
            <ListComponent data={this.props.todoItems}/>
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
      <div>
        <h4> <Glyphicon glyph="star" /> My Todo List <Glyphicon glyph="star" /> </h4>
        <span>{this.props.data[0] == null ? 'No Todos' : this.props.data[0].text}</span>
        <ol>
          {this.props.data.map(x => {
            <li key={x.id}>{x.text}</li>
          })}
        </ol>
      </div>
    );
  }
}

/*
const ListComponent = ({}) => {

}
*/
