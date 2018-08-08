import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addArticle } from "../actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
