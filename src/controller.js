const {success, error} = require('./responserApi')
let posts = [
    {
        id:1,
        title:'Post Title',
        content:'content of the post'
    },
    {
        id:2,
        title:'Title 2',
        content:'content of the post 2'
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



const getPosts = (request, response)=>{
    // posts = fetch from Database
    response.status(200).json(success(200,posts,"Ok"))
}

const getPostById = (request, response)=>{
    let id = request.params.id
    // search in db or the list
    let post = posts.find((item)=> item.id == id)
    if(!post)
        response.status(404).json(error(404,"Post Not Found"))
    else
        response.status(200).json(success(200, post, "Post Found"))
}
const createPost = (request, response)=>{
    let {
        id, title, content
    } = request.body
    let post = {
        id:id,
        title:title,
        content:content
    }
    posts.push(post)
    response.status(201).json(success(201, post, "Post Created"))

}

const deletePost = (request, response)=>{
    let id = request.params.id
    // search in db or the list
    let postIndex = posts.findIndex((item)=> item.id == id)
    if(postIndex > -1)
    {
        posts.splice(postIndex,1)
        response.status(200).json(success(200, posts, `Post ${id} deleted`))
    }      
    else{
        response.status(404).json(error(404,"Post Not Found and not deleted"))

    }  
}

const updatePost = (request, response)=>{
    let id = request.params.id
    const {title, content} = request.body
    // search in db or the list
    let postIndex = posts.findIndex((item)=> item.id == id)
    if(postIndex > -1)
    {
        let newPost = {
            id:id,
            title:title,
            content:content
        };

        posts[postIndex] = newPost;
        response.status(200).json(success(200, posts, `Post ${id} deleted`))
    }      
    else{
        response.status(404).json(error(404,"Post Not Found and not deleted"))

    }  
}
module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
}
