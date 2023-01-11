import { IPost } from '../../../types/feed.type';

export const filterPost = (
  postArr: IPost[],
  filters: {
    stackFilter: string[];
    followingFilter: string[];
    activeFeed: string;
  }
) => {
  let finalFiltered = postArr;

  finalFiltered =
    filters.stackFilter.length > 0
      ? postArr.filter((post) =>
          post.stack.find(({ label }) => filters.stackFilter.includes(label))
        )
      : postArr;

  if (filters.activeFeed === 'Following') {
    finalFiltered =
      filters.followingFilter?.length > 0
        ? finalFiltered.filter((post) =>
            filters.followingFilter.includes(post.user._id)
          )
        : finalFiltered;
  }

  return finalFiltered;
};
