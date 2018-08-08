import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  render() {
    console.log(`props: ${this.props[0]}`);
    const { articles } = this.props;
    return articles.length > 0 ? (
      <div>
        {articles.map(({ id, title }) => <TodoItem key={id} title={title} />)}
      </div>
    ) : (
      <div>할 일이 없습니다. </div>
    );
  }
}
