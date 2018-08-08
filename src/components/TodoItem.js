import React from "react";

export default class TodoItem extends React.Component {
  render() {
    const { title, id } = this.props;
    return <div>{title}</div>;
  }
}
