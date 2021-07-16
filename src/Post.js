import React from 'react';

function Post({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Post;
