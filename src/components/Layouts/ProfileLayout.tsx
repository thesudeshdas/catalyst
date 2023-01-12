import { useEffect, useState } from 'react';
import {
  Outlet,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getUserDetails,
  updateUserDetails,
} from '../../features/auth/authActions';
import { IRejectErrors, IUser } from '../../types/auth.type';
import ProfileDetails from '../Profile/ProfileDetails';
import PortfolioNav from '../Navs/PortfolioNav';

export type ContextType = {
  user: IUser;
  isMyProfile: boolean;
  starredPost: string[];
  handleStarPost: Function;
  handleUnstarPost: Function;
};

export default function ProfileLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { profileId } = useParams();

  const authUser = useAppSelector((state) => state.auth.user);

  const isMyProfile = authUser._id == profileId;

  // * - this is the wrong way
  const [user, setUser] = useState<IUser | IRejectErrors>(
    isMyProfile ? authUser : null
  );

  const [starredPost, setStarredPost] = useState<string[]>(user?.starredPost);

  const handleStarPost = async (postId) => {
    if (starredPost.length < 3) {
      const newStarredPost = [...starredPost, postId];

      const data = await dispatch(
        updateUserDetails({
          userId: user._id,
          toUpdate: { starredPost: newStarredPost },
        })
      );

      if (data.payload.starredPost.length > starredPost.length) {
        setStarredPost(data.payload.starredPost);
      }
    } else {
      console.log('Only 3 posts can be starred');
      // TODO - Make a notification for this
    }
  };

  const handleUnstarPost = async (postId) => {
    const newStarredPost = starredPost.filter((item) => item != postId);

    const data = await dispatch(
      updateUserDetails({
        userId: user._id,
        toUpdate: { starredPost: newStarredPost },
      })
    );

    if (data.payload.starredPost.length < starredPost.length) {
      setStarredPost(data.payload.starredPost);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await dispatch(getUserDetails({ userId: profileId }));

      if (response.meta.requestStatus === 'fulfilled') {
        setUser(response.payload);
        setStarredPost(response.payload.starredPost);
      } else {
        navigate('/error');
      }
      // TODO - handle error here
    })();
  }, [profileId, dispatch]);

  return (
    <>
      <ProfileDetails user={user} />

      <PortfolioNav userId={profileId} />

      <Outlet
        context={{
          user,
          isMyProfile,
          starredPost,
          handleStarPost,
          handleUnstarPost,
        }}
      />
    </>
  );
}

export function useUserDetails() {
  return useOutletContext<ContextType>();
}
