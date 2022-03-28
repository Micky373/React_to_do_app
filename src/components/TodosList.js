import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>{this.props.todos.map((tasks) => (<TodoItem key={tasks.id} todo={tasks} />))}</ul>
    );
  }
}

export default TodosList;
