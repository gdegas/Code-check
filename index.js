

const fetch = require('node-fetch')

// const postsAmount = fetch(url + '/posts?userId=1')
//     .then(response => response.json())
//     .then(data => console.log(data.length))
//     .catch(error => console.log(error))

    
function getAlbums(url) {
    return fetch(url + '/albums?userId=1')
    .then(response => response.json())
    .then(albums => albums.length)
}   

function getTodos(url) {
    return fetch(url + '/todos?userId=1')
        .then(response => response.json())
        .then(todos => todos.length)
}

// getTodos(url).then(todos => {
//     getAlbums(url).then(albums => {
//         console.log(`bret has ${todos} todos and ${albums} albums`)
//     })
// })
const url = 'https://jsonplaceholder.typicode.com';

const getLocation = async url => {
  try {
    const todosResponse = await fetch(url + '/todos?userId=1');
    const todosJson = await todosResponse.json();
    const albumsResponse = await fetch(url + '/albums?userId=1')
    const albumsJson = await albumsResponse.json()
    const postsResponse = await fetch(url + '/posts?userId=1')
    const postsJson = await postsResponse.json()
    console.log(
      `Todos: ${todosJson.length} -`,
      `Albums: ${albumsJson.length} -`,
      `Posts: ${postsJson.length}`
    );
  } catch (error) {
    console.log(error);
  }
};

getLocation(url);

  



// console.log(`Bret has ${postsAmount} posts, ${albumsAmount} albums, ${todosAmount} todos`)



