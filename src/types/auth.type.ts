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
  savedPost: string[];
};

export type IRejectErrors = {
  errorStatus: number;
  errorMessage: string;
  username?: string;
  email?: string;
  name?: string;
  _id?: string; // TODO - Check these for error handling
  password?: null;
  title?: string;
  company?: string;
  profilePic?: IProfilePic;
  image?: string;
  tags?: string[];
  bio?: string;
  stack?: IStack[];
  social?: ISocial[];
  status?: string;
  followers?: string[];
  following?: string[];
  starredPost?: string[];
  savedPost?: string[];
  user?: any;
  accessToken?: any;
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
  accessToken: string;
};
