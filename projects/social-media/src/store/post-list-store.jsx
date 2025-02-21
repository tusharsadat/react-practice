import { createContext, useReducer } from "react";

export const PostList = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.postId);
    default:
      return state;
  }
};

const PostListStore = ({ children }) => {
  const DEFAULT_POSTS = [
    {
      id: 1,
      title: "Post 1",
      content:
        "This is the second post This is the third post This is the third post This is the first post This is the third post This is the third post ",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 192,
        dislikes: 25,
      },
      views: 305,
      userId: "tushar",
    },
    {
      id: 2,
      title: "Post 2",
      content:
        "This is the second post This is the third post This is the third post This is the second post This is the third post This is the third post ",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 192,
        dislikes: 25,
      },
      views: 305,
      userId: "Tilka",
    },
    {
      id: 3,
      title: "Post 3",
      content:
        "This is the second post This is the third post This is the third post This is the third post This is the third post This is the third post ",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 192,
        dislikes: 25,
      },
      views: 305,
      userId: "Sami",
    },
  ];
  const [posts, dispatch] = useReducer(postReducer, DEFAULT_POSTS);

  const addPost = (post) => {
    dispatch({ type: "ADD_POST", post });
  };
  const deletePost = (postId) => {
    dispatch({ type: "DELETE_POST", postId });
  };

  return (
    <PostList.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListStore;
