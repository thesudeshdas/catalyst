export type IProfilePic = {
  src: string;
  alt: string;
};

export type ISocial = {
  platform: string;
  link: string;
};

export type IStack = { value: string; label: string };

export type IUser = {
  name: string;
  username: string;
  password: null;
  email: string;
  _id?: string;
  title: string;
  company: string;
  profilePic: IProfilePic;
  image: string;
  tags: string[];
  bio: string;
  stack: IStack[];
  social: ISocial[];
  status: string;
  followers: string[];
  following: string[];
  starredPost: string[];
};

export type IRejectErrors = {
  errorStatus: number;
  errorMessage: string;
  email?: string;
  name?: string;
  _id?: string; // TODO - Check these for error handling
};

export type IAuthErrors = {
  email: string;
  password: string;
  username: string;
};

export type IAuthState = {
  loading: boolean;
  signInStatus: boolean;
  errors: IAuthErrors;
  user: IUser;
};
