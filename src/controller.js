
let posts = [
    {
        id:1,
        title:'Post Title',
        content:'content of the post'
    },
    {
        id:2,
        title:'Title 2',
        content:'content of the post'
    },
    {
        id:3,
        title:'Title 3',
        content:'content of the post'
    },
    {
        id:4,
        title:'Title 4',
        content:'content of the post'
    },
    {
        id:5,
        title:'Title 5',
        content:'content of the post'
    }
];
const { success, error } = require("./responserApi");


const getPosts = (request, response) => {
        response.status(200).json(success(posts))
}
const getPostById = (request, response) => {
    const id = parseInt(request.params.id)
    let post = posts.find((item)=>item.id == id)
    if(!post)
        response.status(404).json(error('Post Not Found',404))
    else{
        response.status(200).json(success(post))

        }  
}

module.exports = {
    getPosts,
    getPostById,
}