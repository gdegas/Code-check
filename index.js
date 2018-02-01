

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

const brettsData = async (url, userId) => {
  try {
    const usersResponse = await fetch(url + '/users/' + userId)
    const userJson = await usersResponse.json();
    const todosResponse = await fetch(url + '/todos?userId=' + userId);
    const todosJson = await todosResponse.json();
    const albumsResponse = await fetch(url + '/albums?userId=' + userId)
    const albumsJson = await albumsResponse.json()
    const postsResponse = await fetch(url + '/posts?userId=' + userId)
    const postsJson = await postsResponse.json()
    // const post1Response = await fetch(url + '/posts/1')
    // const post1Json = await post1Response.json()
    // const post2Response = await fetch(url + '/posts/2')
    // const post2Json = await postsResponse.json()
    // const post3Response = await fetch(url + '/posts/3')
    // const post3Json = await postsResponse.json()
    // const post4Response = await fetch(url + '/posts/4')
    // const post4Json = await postsResponse.json()
    // const post5Response = await fetch(url + '/posts/5')
    // const post5Json = await postsResponse.json()
    console.log(
      `${userJson.username} has ${postsJson.length} posts, ${albumsJson.length} albums, and ${todosJson.length} todos`,
      `post 1: ${postsJson[0].title}`,
      `post 2: ${postsJson[1].title}`,
      `post 3: ${postsJson[2].title}`,
      `post 4: ${postsJson[3].title}`,
      `post 5: ${postsJson[4].title}`,
      

    );
  } catch (error) {
    console.log(error);
  }
};

brettsData(url, 1);

  



// console.log(`Bret has ${postsAmount} posts, ${albumsAmount} albums, ${todosAmount} todos`)



