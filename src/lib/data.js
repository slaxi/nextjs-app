/**
 * get the list of all posts
 */

import connectionToDB from "./utils";
import { unstable_noStore as noStore } from "next/cache";

const { Post, User } = require("./models");

export const getPosts = async () => {
  try {
    connectionToDB();
    const posts = await Post.find();
    if (!posts) {
      throw new Error("No pounts has being found!");
    }
    return posts;
  } catch (error) {
    console.error(error);
  }
};

/**
 * get the single post
 * based on a slug
 */
export const getPost = async (slug) => {
  try {
    connectionToDB();
    const post = await Post.findOne({slug}); // find vraca array, a findOne objekat
    if (!post) {
      throw new Error("No pounts has being found!");
    }
    return post;
  } catch (error) {
    console.error(error);
  }
};

/**
 * get the list of all users
 */

export const getUsers = async () => {
    try {
      connectionToDB();
      const users = await User.find();
      if (!users) {
        throw new Error("No pounts has being found!");
      }
      return users;
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * get the single user
   */
export const getUser = async (id) => {
  noStore()
  try {
    connectionToDB();
    const user = await User.findById(id);
    if (!user) {
      throw new Error("No pounts has being found!");
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
