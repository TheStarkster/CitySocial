// const {model , Schema} = require('mongoose')

// const postSchema = new Schema({
//     body: String,
//     username: String,
//     createdAt: String,
//     comments: [
//         {
//             body: String,
//             username: String,
//             createdAt: String,
//         },
//     ],
//     likes: [
//         {
//             username: String,
//             createdAt: String,
//         },
//     ],
//     user:{
//         type: Schema.Types.ObjectId,
//         ref: 'user'
//     }
// })

// module.exports = model('Post', postSchema)
  
// const Sequelize = require('sequelize');
// const db = require('../config/connection/db');

// const Post = db.define('post', {
//     body: {
//         type: Sequelize.STRING
//     },
//     username: {
//         type: Sequelize.STRING
//     },
//     createdAt: {
//         type: Sequelize.STRING
//     },
// })

// module.exports = Post;