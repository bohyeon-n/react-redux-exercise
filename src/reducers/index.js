import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-type";
const initialState = {
  articles: [{ title: "default article title!", id: 1 }]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log(action.payload);
      return { ...state, articles: [...state.articles, action.payload] };
    case DELETE_ARTICLE:
      const id = action.payload;
      const arti = state.articles.pop();
      console.log(action.payload);
      return { articles: [...arti] };
    default:
      return state;
  }
};

export default rootReducer;
