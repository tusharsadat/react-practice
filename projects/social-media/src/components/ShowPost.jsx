import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";

const ShowPost = () => {
  const { posts } = useContext(PostList);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          tags={post.tags}
          reactions={post.reactions}
        />
      ))}
    </div>
  );
};

export default ShowPost;
