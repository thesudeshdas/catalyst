import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getUserDetails } from '../../features/auth/authActions';
import { IRejectErrors, IUser } from '../../types/auth.type';
import ProfileDetails from '../Profile/ProfileDetails';
import PortfolioNav from '../Navs/PortfolioNav';

export default function ProfileLayout() {
  let { profileId } = useParams();

  const location = useLocation();
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.auth.user);

  const isMyProfile = authUser._id == profileId;

  // * - this is the wrong way
  const [user, setUser] = useState<IUser | IRejectErrors>(
    isMyProfile ? authUser : null
  );

  const [starredPost, setStarredPost] = useState(user?.starredPost);

  const handleStarPost = async (postId) => {
    // if (starredPost.length < 3) {
    //   const newStarredPost = [...starredPost, postId];
    //   const data = await updateUser(user._id, { starredPost: newStarredPost });
    //   if (data.starredPost.length > starredPost.length) {
    //     setStarredPost(data.starredPost);
    //   }
    // } else {
    //   console.log('Only 3 posts can be starred');
    //   // TODO - Make a notification for this
    // }
  };

  const handleUnstarPost = async (postId) => {
    // const newStarredPost = starredPost.filter((item) => item != postId);
    // const data = await updateUser(user._id, { starredPost: newStarredPost });
    // if (data.starredPost.length < starredPost.length) {
    //   setStarredPost(data.starredPost);
    // }
  };

  useEffect(() => {
    if (!isMyProfile) {
      (async () => {
        const response = await dispatch(getUserDetails({ userId: profileId }));

        if (response.meta.requestStatus === 'fulfilled') {
          setUser(response.payload);
        }
        // TODO - handle error here
      })();
    }
  }, []);

  // console.log({ user, authUser, profileId, isMyProfile });

  console.log('render');

  return (
    <>
      <ProfileDetails user={user} />

      <PortfolioNav userId={profileId} />
      <Outlet />
    </>
  );
}
