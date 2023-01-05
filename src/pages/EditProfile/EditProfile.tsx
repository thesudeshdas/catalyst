import { useAppSelector } from '../../app/hooks';
import { FormEditProfile } from '../../components';

export default function PageEditProfile() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <FormEditProfile />
    </>
  );
}
