import { IUser } from './auth.type';

export type IPostPic = {
  src: string;
  alt: string;
  _id?: string;
};

export type IComment = {
  _id: string;
  user: IUser;
  text: string;
};

export type IPostStack = { value: string; label: string };

export type IPost = {
  user: IUser;
  description: string;
  images: IPostPic[];
  likes: string[];
  name: string;
  live: string;
  repo: string;
  stack: IPostStack[];
  _id?: string;
  comments: IComment[];
};

export type IFeedNavItem = { text: string };

export type IFeedNav = {
  items: IFeedNavItem[];
};

export type IFeedRejectErrors = {
  errorStatus: number;
  errorMessage: string;
  likes?: string[];
};

export type IFeedState = {
  loading: boolean;
  posts: IPost[];
  error: IFeedRejectErrors;
};
