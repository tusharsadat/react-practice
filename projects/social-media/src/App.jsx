import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
import PostListStore from "./store/post-list-store";
function App() {
  const [activeComponent, setActiveComponent] = useState("createPost");
  return (
    <PostListStore>
      <div className="app-container">
        <Sidebar
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
        />
        <div className="body-container">
          <Header />
          <div className="main-container">
            {activeComponent === "createPost" && <CreatePost />}
            {activeComponent === "showPost" && <ShowPost />}
          </div>
          <Footer />
        </div>
      </div>
    </PostListStore>
  );
}

export default App;
