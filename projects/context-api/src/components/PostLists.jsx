import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const PostLists = () => {
  const postLists = useContext(PostList);
  return (
    <div>
      <ul>
        {postLists.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostLists;
