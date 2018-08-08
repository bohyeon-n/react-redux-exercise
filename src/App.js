import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";

import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoListContainer />
          <TodoFormContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
