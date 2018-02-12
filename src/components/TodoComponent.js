import React, { Component } from 'react';
import {Button, Label, FormControl, ControlLabel, FormGroup, Row, Col, Grid, Glyphicon, PageHeader } from 'react-bootstrap';

import { addNewTodo, updateNewTodoText, filterTodos, COMPLETE, INCOMPLETE, ALL } from '../actions/TodoActions';
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
          <Row>

          </Row>
          <Row style={{marginTop:'25px'}} >
            <ListComponent data={this.props.todoItems} filter={this.props.filter} />
          </Row>
        </Grid>
        </FormGroup>
      </div>
    );
  }
}

//TODO make the filter links appear only when the current set isn't displayed. E.g. All link shouldn't display when all are showing
class ListComponent extends Component {
  render() {
    return (
      <div>
        <div className={'filter-link-bar'}>
          <FilterLink text="All Items"/>
          <FilterLink text="Complete Items" />
          <FilterLink text="Incomplete Items" />
        </div>
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
//TODO make the call to the action more dynamic?
const FilterLink = ({filterType}) => {
  switch(filterType) {
    case ALL:
      return (
        <div className={'filter-link-bar'}>
          <span className={'filter-link'}>
            <a>Complete</a>
          </span>
          <span className={'filter-link'}>
            <a>Incomplete</a>
          </span>
        </div>
      );
      case COMPLETE:
        return (
          <div className={'filter-link-bar'}>
            <span className={'filter-link'}>
              <a>All</a>
            </span>
            <span className={'filter-link'}>
              <a>Incomplete</a>
            </span>
          </div>
        );
        case INCOMPLETE:
          return (
            <div className={'filter-link-bar'}>
              <span className={'filter-link'}>
                <a>All</a>
              </span>
              <span className={'filter-link'}>
                <a>Complete</a>
              </span>
            </div>
          );
          default:
            return (
              <div className={'filter-link-bar'}>
                <span className={'filter-link'}>
                  <a>Complete</a>
                </span>
                <span className={'filter-link'}>
                  <a>Incomplete</a>
                </span>
              </div>
            );

  }
}
