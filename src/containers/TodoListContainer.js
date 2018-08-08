import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { deleteArticle } from "../actions/index";
const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: id => dispatch(deleteArticle(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
