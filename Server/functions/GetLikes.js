import {Like} from "../models/LikeSchema.js";

export async function getPostLikes(id){
   Like.countDocuments({post:id}).exec((err,count)=>{
       if(err)
       {
           console.log(err.code);
           return null;
       }
       else
       {
           return count;
       }

   });
}
