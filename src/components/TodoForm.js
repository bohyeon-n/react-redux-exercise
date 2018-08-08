import React from "react";

class TodoForm extends React.Component {
  state = {
    body: ""
  };
  handleChange = e => {
    this.setState({
      body: e.target.value
    });
  };
  handleSubmit = e => {
    console.log(this.state.body);
    e.preventDefault();
    console.log(this.props.addArticle);
    const { article } = this.state;
    this.props.addArticle({ title: this.state.body });
    this.setState({
      body: ""
    });
  };
  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={body} />
        <button>submit</button>
      </form>
    );
  }
}

export default TodoForm;
