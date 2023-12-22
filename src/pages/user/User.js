import Main from '../../components/main/Main';
import { useParams } from 'react-router-dom';


const User = () => {
  const { user } = useParams();
  
  return (
    <>
      <Main user={user} />
    </>
  );
}

export default User;