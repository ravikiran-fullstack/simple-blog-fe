import React from "react";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className='Home'>
      {posts.length ? (
        <Feed posts={posts}></Feed>
      ) : (
        <p style={{ marginTop: "2rem" }}>Posts are empty</p>
      )}
    </main>
  );
};

export default Home;
