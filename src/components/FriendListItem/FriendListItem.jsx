import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={clsx(css.status, css[isOnline])}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
