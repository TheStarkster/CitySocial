const Posts = require('../../models/Post')

module.exports = {
    Query: {
        async getPosts(){
            try{
                const posts = await Posts.find()
                return posts;
            }catch(err){
                throw new Error(err)
            }
        }
    }
}