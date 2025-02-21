import { useState, useContext } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert comma-separated string to array
      reactions: {
        likes: 0,
        dislikes: 0,
      },
      views: 0,
      userId,
    };
    addPost(newPost);
    setTitle("");
    setContent("");
    setTags("");
    setUserId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postContent" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTags" className="form-label">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          className="form-control"
          id="postTags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postUserId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="postUserId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
