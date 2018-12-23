import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addTask, captureInput } from "./actions";

class Page extends PureComponent {
  render() {
    const { tasks, addTask, captureInput, input } = this.props;
    return (
      <div>
        <ul>
          {tasks.map((task, i) => {
            return <li key={i}>{task}</li>;
          })}
        </ul>
        <input type="text" onChange={captureInput} value={input} />
        <button onClick={addTask}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  input: state.input
});

const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(addTask()),
  captureInput: e => dispatch(captureInput(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
