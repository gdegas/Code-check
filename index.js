// const fetch = require('node-fetch')
    
// function getAlbums(url) {
//     return fetch(url + '/albums?userId=1')
//     .then(response => response.json())
//     .then(albums => albums.length)
// }   

// function getTodos(url) {
//     return fetch(url + '/todos?userId=1')
//         .then(response => response.json())
//         .then(todos => todos.length)
// }

// // getTodos(url).then(todos => {
// //     getAlbums(url).then(albums => {
// //         console.log(`bret has ${todos} todos and ${albums} albums`)
// //     })
// // })
// const url = 'https://jsonplaceholder.typicode.com';

// const getData = async (url, userId) => {
//   try {
//     const usersResponse = await fetch(url + '/users/' + userId)
//     const userJson = await usersResponse.json();

//     const todosResponse = await fetch(url + '/todos?userId=' + userId);
//     const todosJson = await todosResponse.json();

//     const albumsResponse = await fetch(url + '/albums?userId=' + userId)
//     const albumsJson = await albumsResponse.json()

//     /* returns JSON object with all posts from given userId */
//     const postsResponse = await fetch(url + '/posts?userId=' + userId)
//     const postsJson = await postsResponse.json()
//     // use const variables and await to return a list of comments based on postId

//     console.log(
//         `${userJson.username} has ${postsJson.length} posts, ${albumsJson.length} albums, and ${todosJson.length} todos`
//         );
//       console.log(`post 1: ${postsJson[0].title}`);
//       console.log(`post 2: ${postsJson[1].title}`);
//       console.log(`post 3: ${postsJson[2].title}`);
//       console.log(`post 4: ${postsJson[3].title}`);
//       console.log(`post 5: ${postsJson[4].title}`);
//       console.log(`viewing post "${postsJson[4].title}" which has 5 comments`);
//       console.log(`You commented "Great post!"`)
//     } catch (error) {
//     console.log(error);
//   }
// }
const window = {}
const require = moduleName => {
    return window.myModules[moduleName] ? window.myModules[moduleName] : null;
}

const define = (moduleName, fn) => {
    let functionExistsInGlobal = false;
    for (let property in window.myModules) {
        if (window.myModules.hasOwnProperty(moduleName)) {
            functionExistsInGlobal = true;
        }
    }
    if (moduleName && typeof moduleName === 'string' && !functionExistsInGlobal && typeof fn === 'function') {
        window.myModules[moduleName] = fn;
    } else {
        throw new Error("Please ensure that you pass a unique string and a function as arguments.")
    }
}

window.require = require;
window.define = define;
window.myModules = {};

define('sum', (a,b) => a + b);
const sum = require('sum');
console.log(sum(1,2)); //3
//define('sum', (a,b) => a - b); //Successfully throws an error since the function already exists
define('difference', (a,b) => a - b);
const difference = require('difference');
console.log(difference(8,3)); //5
