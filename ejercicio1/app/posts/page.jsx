import PostCard from "../components/PostCard";

async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    return data;
}

async function PostPages() {
    const posts = await loadPosts();
    console.log(posts);
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    );
}

export default PostPages;