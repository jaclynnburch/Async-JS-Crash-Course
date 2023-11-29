const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    posts.push(post);

    const error = false;

    if(!error) {
        resolve();
    } else {
       reject('Error: Jackie got it!'); 
    }
}, 2000);
    });
}
// ---------------------------------------------Promises------------------------------------------
// createPost({ title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// -------------------------------Async / Await - elegant way to handle promises--------------
async function init () {
    await createPost ({ title: 'Post Three', body: 'This is post three'});

    getPosts();
}

init();


// ------------------------------------Fetch w/ promises---------------------------------------

// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// Promise.all([promise1, promise2, promise3, promise4])
//   .then(values => console.log(values))
//   .catch(error => {
//     console.error('Error resolving promises:', error);
//   });





