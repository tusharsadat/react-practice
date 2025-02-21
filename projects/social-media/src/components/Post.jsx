import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { BiDislike, BiLike } from "react-icons/bi";
import { RiChatDeleteFill } from "react-icons/ri";

const Post = ({ id, title, content, tags, reactions }) => {
  const { deletePost, likePost, dislikePost } = useContext(PostList);

  return (
    <div className="card" style={{ width: "33rem", margin: "10px" }}>
      <button
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(id)}
      >
        <RiChatDeleteFill />
      </button>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
      <div className="card-tags">
        {tags &&
          tags.map((tag) => (
            <span key={tag} className="badge bg-info text-dark card-tag">
              {tag}
            </span>
          ))}
      </div>
      <div className="card-reactions">
        <button
          className="btn btn-primary card-reaction"
          onClick={() => likePost(id)}
        >
          <BiLike /> {reactions.likes} Like
        </button>
        <button
          className="btn btn-warning card-reaction"
          onClick={() => dislikePost(id)}
        >
          <BiDislike /> {reactions.dislikes} Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
