import * as React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://reduxjs.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "React Native",
    url: "https://reactnative.dev/",
    author: "Akk Ggg",
    num_comments: 2,
    points: 3,
    objectID: 2,
  },
  {
    title: "Flutter",
    url: "https://flutter.dev/",
    author: "Akk Ggg",
    num_comments: 2,
    points: 4,
    objectID: 3,
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <List />
    </div>
  );

  function List() {
    return (
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> {item.author} </span>
              <span> {item.num_comments} </span>
              <span> {item.points} </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
