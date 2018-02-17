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
            <ListComponent data={this.props.visibleTodos} filter={this.props.filter} action={this.props.filterTodos} toggleAction={this.props.toggleTodo} />
          </Row>
        </Grid>
        </FormGroup>
      </div>
    );
  }
}

//this is very inelegant a lot of copy and paste code.  TODO refactor
//also we are passing down a lot of props that we shouldn't have to do, might make more sense to have containers for some of these items.
class ListComponent extends Component {
  render() {
    let linkPanel;
    console.log("Props for list component: ", this.props);
    switch(this.props.filter) {
      case ALL:
        linkPanel = (
          <div className={'filter-link-bar'}>
            <span> Show (All): &nbsp; </span>
            <FilterLink text={"Complete"} filter={COMPLETE} filterClick={this.props.action} />
            <FilterLink text={"Incomplete"} filter={INCOMPLETE} filterClick={this.props.action} />
          </div>
        );
        break;
      case INCOMPLETE:
      linkPanel = (
        <div className={'filter-link-bar'}>
          <span> Show (Incomplete): &nbsp; </span>
          <FilterLink text={"All"} filter={ALL} filterClick={this.props.action}/>
          <FilterLink text={"Complete"} filter={COMPLETE} filterClick={this.props.action}/>
        </div>
      );
      break;
      case COMPLETE:
      linkPanel = (
        <div className={'filter-link-bar'}>
          <span> Show (Complete): &nbsp; </span>
          <FilterLink text={"All"} filter={ALL} filterClick={this.props.action}/>
          <FilterLink text={"Incomplete"} filter={INCOMPLETE} filterClick={this.props.action}/>
        </div>
      );
      break;
      default:
        linkPanel = (
          <div className={'filter-link-bar'}>
            Show:
            <FilterLink text={"Complete"} filter={COMPLETE} filterClick={this.props.action}/>
            <FilterLink text={"Incomplete"} filter={INCOMPLETE} filterClick={this.props.action}/>
          </div>
        );
        break;
    }
    return (
      <div>
        <div className={'filter-link-bar'}>
          {linkPanel}
        </div>
        <h4> <Glyphicon glyph="pencil" /> Todo List </h4>
          <ul>
            {this.props.data[0] == null  ? <li>No Todos</li> : this.props.data.map(x => <ListItem item={x} toggleTodo={this.props.toggleAction} />)}
          </ul>
      </div>
    );
  }
}

//function style component
const ListItem = ({item, toggleTodo}) => {
  return (
    <li onClick={()=> toggleTodo(item.id)}key={item.id} className={item.completed ? 'item-complete' : 'item-incomplete'}>{item.text}</li>
  );
};

const FilterLink = ({filter, text, filterClick}) => {
  console.log("Props for the FilterLink: ", text);
  return (
    <a href="#" className="filter-link" onClick={e => {e.preventDefault(); filterClick(filter) }}> {text} </a>
  );
}
