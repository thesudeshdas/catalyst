// import { IPost } from '../../types/feed.type';

import axios from 'axios';

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_POSTS_API_URL}`);

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getPostDetails = async (postId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API_URL}/${postId}`
    );

    return response;
  } catch (error) {
    return error.response;
  }
};

// export const likePost = async (postId: string, userId: string) => {
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId }),
//   };

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/like/${postId}`,
//     config
//   ).then((r) => r.json());

//   return data.updatedPost;
// };

// export const unlikePost = async (postId: string, userId: string) => {
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId }),
//   };

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/unlike/${postId}`,
//     config
//   ).then((r) => r.json());

//   return data.updatedPost;
// };

// export const createPost = async (req) => {
//   console.log({ req });

//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(req),
//   };

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/create`,
//     config
//   ).then((r) => r.json());

//   return data.addedPost;
// };

// export const commentPost = async (
//   postId: string,
//   userId: string,
//   comment: string
// ) => {
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId, comment }),
//   };

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/comment/${postId}`,
//     config
//   ).then((r) => r.json());

//   return data.updatedPost;
// };

// export const editPost = async (postId: string, updatedPost: Partial<IPost>) => {
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedPost),
//   };

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/edit/${postId}`,
//     config
//   ).then((r) => r.json());

//   return data.updatedPost;
// };

// export const deletePost = async (postId: string) => {
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/delete/${postId}`,
//     config
//   ).then((r) => r.json());

//   return data.updatedPost;
// };
