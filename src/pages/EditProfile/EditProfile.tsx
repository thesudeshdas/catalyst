import { FormEditProfile } from '../../components';
import useDocumentTitle from '../../lib/hooks/useDocumentTitle';

export default function PageEditProfile() {
  useDocumentTitle('Catalyst | Edit Portfolio');

  return (
    <>
      <FormEditProfile />
    </>
  );
}
