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
            <ListComponent data={this.props.todoItems} filter={this.props.filter} action={this.props.filterTodos} />
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
    let linkPanel;
    switch(this.props.filter) {
      case ALL:
        linkPanel = (
          <div className={'filter-link-bar'}>
            <FilterLink filterClick={null} text={"Complete"} filter={COMPLETE} />
            <FilterLink filterClick={null} text={"Incomplete"} filter={INCOMPLETE} />
          </div>
        );
      case INCOMPLETE:
      linkPanel = (
        <div className={'filter-link-bar'}>
          <FilterLink filterClick={null} text={"All"} filter={ALL} />
          <FilterLink filterClick={null} text={"Complete"} filter={COMPLETE} />
        </div>
      );
      case COMPLETE:
      linkPanel = (
        <div className={'filter-link-bar'}>
          <FilterLink filterClick={null} text={"All"} filter={ALL} />
          <FilterLink filterClick={null} text={"Incomplete"} filter={INCOMPLETE} />
        </div>
      );
      default:
        linkPanel = (
          <div className={'filter-link-bar'}>
            <FilterLink filterClick={null} text={"Complete"} filter={COMPLETE} />
            <FilterLink filterClick={null} text={"Incomplete"} filter={INCOMPLETE} />
          </div>
        );
    }
    return (
      <div>
        <div className={'filter-link-bar'}>
          {linkPanel}
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
};

const FilterLink = ({filter, text, filterClick}) => {
  return (
    <a href="#" className="filter-link" onClick={e => {e.preventDefault(); this.props.filterClick(filter) }}> {text} </a>
  )
}
