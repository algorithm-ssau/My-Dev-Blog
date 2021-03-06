import {getPostLikes} from "../functions/GetLikes.js"

export const createPostsResponse = (posts) =>{
    return posts.map((post)=>{
        return{
            title:post.title,
            description:post.description,
            date:post.date,
            id:post.id,
            author:post.author.nickname,
            section:post.section,
            like_count:getPostLikes(post._id)
        }
    });
};

export const createPostResponse = (post) =>{
    return{
        title:post.title,
        text:post.text,
        date:post.date,
        author:post.author.nickname,
        like_count:getPostLikes(post._id)       
    };
};