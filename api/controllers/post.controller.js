import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  if (!req.user) {
    console.log("You have to register first to post news");
    return next(errorHandler(403, "You have to register first to post news"));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  // YOU CAN USE slug TO REMOVE NON STRING CHARACTER FROM POST TITLE.
  // const slug = req.body.title
  //   .split(' ')
  //   .join('-')
  //   .toLowerCase()
  //   .replace(/[^a-zA-Z0-9-]/g, '');

  const newPost = new Post({
    ...req.body,
    userId: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};
