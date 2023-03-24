const INITIAL_STATE = {
  posts: [],
  post:[]
};
export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_POST":
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
