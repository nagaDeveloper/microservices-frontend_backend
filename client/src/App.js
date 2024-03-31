import CreatePost from "./components/CreatePosts/CreatePost";
import PostList from "./components/PostLists/PostsList";
function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />
      <hr />
      <h1>My Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
