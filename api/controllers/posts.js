import Post from '../models/Post.js';
import User from '../models/User.js';

// * CREATE
export const createPost = async (req, res) => {
    try {

        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            picturePath,
            userPicturePath: user.picturePath,
            likes: {},
            comments: []
        });

        await newPost.save();
        
        const post = await Post.find();

        res.status(200).json(post)
        
    } catch (error) {
        res.status(409).json({error: error.message});
    }
}

export const likePost = async (req, res) => { }
export const getFeedPosts = async (req, res) => { }
export const getUserPosts = async (req, res) => { }