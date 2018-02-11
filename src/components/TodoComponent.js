import React, { Component } from 'react';
import {Button, Label, FormControl, ControlLabel, FormGroup, Row, Col, Grid, Glyphicon, PageHeader } from 'react-bootstrap';

import { addNewTodo, updateNewTodoText } from '../actions/TodoActions';
//import TodoContainer from '../containers/TodoContainer';


export default class TodoComponent extends Component {

  componentDidMount() {
    //initialization items

    //set focus on the input box
    this.todoInput.focus();
  }

  componentDidUpdate() {
    this.todoInput.focus();
  }

  render() {
    return (
      <div>
        <PageHeader><Glyphicon glyph="list" /> My Todo List App </PageHeader>
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
                value={this.props.todoText == null ? "" : this.props.todoText}
                placeholder="Enter Todo"
                inputRef={(ref)=>this.todoInput = ref}
                onChange={() => this.props.updateNewTodoText(this.todoInput.value)}
                />
            </Col>
            <Col md={4}>
                <Button bsStyle="primary" onClick={ () => this.props.addTodo(null, this.todoInput.value) }>Add Todo</Button>
            </Col>
          </Row>
          <Row style={{marginTop:'25px'}} >
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
        <h4> <Glyphicon glyph="pencil" /> Todo List </h4>
        <span>{this.props.data[0] == null ? 'No Todos' : ''}</span>
          <ul>
            {this.props.data.map(x => <ListItem item={x} />)}
          </ul>
      </div>
    );
  }
}

//function style component
const ListItem = ({item}) => {
  return (
    <li key={item.id}>{item.text}</li>
  )
}

/*
const ListComponent = ({}) => {

}
*/
