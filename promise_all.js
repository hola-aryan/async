const posts = [];
let lastActivityTime = null;

function createPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = { title: `Post ${posts.length + 1}` };
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject("ERROR ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

Promise.all([createPost(), updateLastUserActivityTime()])
    .then(([post, activityTime]) => {
        console.log(`Created Post: ${post.title}`);
        console.log(`Updated Last Activity Time: ${activityTime}`);
        return Promise.all([createPost(), updateLastUserActivityTime()]);
    })
    .then(([post2, activityTime2]) => {
        console.log(`Created Post: ${post2.title}`);
        console.log(`Updated Last Activity Time: ${activityTime2}`);
        return deletePost();
    })
    .then(() => {
        console.log("Deleted Last Post");
        console.log("Remaining Posts: ", posts);
    })
    .catch((err) => {
        console.log(err);
    });
