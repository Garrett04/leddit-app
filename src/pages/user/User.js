import './User.css';
import { useSelector } from 'react-redux';
import Main from '../../components/main/Main';
import { useParams } from 'react-router-dom';
import { selectAllUsers } from '../../features/users/usersSlice';


const User = () => {
  const { user } = useParams();
  const users = useSelector(selectAllUsers);
  
  const renderUser = () => {
    // console.log(user);
    const foundUser = users.find(userToFind => userToFind.display_name_prefixed === `u/${user}`);
    // console.log(foundUser);
    if (foundUser) {
      const { display_name_prefixed, icon_img, title } = foundUser;
      // console.log(banner_img);
      return (
        <div className='userHeading'>
          <img
            src={icon_img}
            alt={`an icon of ${user}`}
          />
          <h2>{display_name_prefixed}</h2>
          <p>{title}</p>
        </div>
      );
    }
    // console.log(display_name, icon_img);

    return (
      <div className='userHeading'>
        <h2>{`u/${user}`}</h2>
      </div>
    )
  }


  return (
    <>
      {renderUser()}
      <Main user={user} />
    </>
  );
}

export default User;