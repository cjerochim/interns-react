import React from "react";
import Textbox from "../textbox/Textbox";

class Root extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {tasks: []};
    this.onAdd = this.onAdd.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDone(id) {
    const { tasks } = this.state;
    this.setState({ 
      tasks: tasks.map(item => {
        if (item.id === id) return Object.assign({}, item, { isDone: true });
        return item;
      }),
     });
  }

  onDelete(id) {
    const { tasks } = this.state;  
    this.setState({
      tasks: tasks.filter(item => item.id !== id),
    });
  }
  
  onAdd(value) {
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, { id: value, value, isDone: false }],
    });
  }

  render () {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <Textbox onAdd={this.onAdd} />
        <ul>
            {tasks.map(item => (
              <li key={item.id}>
                <div>
                  <p>{ item.value }</p>
                  {item.isDone && <h1>Done</h1>}
                  <button onClick={(e) => this.onDone(item.id)}>Done</button>
                  <button onClick={() => this.onDelete(item.id)}>Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  };

}

export default Root;