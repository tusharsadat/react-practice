import { createContext } from "react";

export const PostList = createContext();
const PostListProvider = PostList.Provider;

export const PostListContext = ({ children }) => {
  const postLists = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];
  return <PostListProvider value={postLists}>{children}</PostListProvider>;
};
