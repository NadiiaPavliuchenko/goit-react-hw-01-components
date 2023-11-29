import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Friends.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <span className={clsx(css.status, css[isOnline])}></span>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
