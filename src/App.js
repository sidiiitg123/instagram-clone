import logo from './logo.svg';
import './App.css';
import Post from './Post.js'
import React,{useState} from 'react';
function App() {

  //Creating a state
  const [posts, setPosts] = useState([
    {
      username:"sudhanshu",
      caption:"Wow it works",
      imageUrl:"https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username:"tanu",
      caption:"DOg is life",
      imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
    }
  ]);
  // console.log(posts);
  // console.log(setPosts);
  return (
    <div className="App">



      <div className="App__header">

        <img className="App__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="">

        </img>

      </div>

      {
        posts.map(post=>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

      <h1>Hi from instagram</h1>
      
    </div>
  );
}

export default App;
