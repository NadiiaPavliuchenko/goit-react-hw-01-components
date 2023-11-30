import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <div className={css.thumb}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
      </div>
      <h3 className={css.name}>{username}</h3>
      <p className={css.info}>@{tag}</p>
      <p className={css.info}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsItem}>
        <p className={css.label}>Followers</p>
        <h4 className="quantity">{followers}</h4>
      </li>
      <li className={css.statsItem}>
        <p className={css.label}>Views</p>
        <h4 className="quantity">{views}</h4>
      </li>
      <li className={css.statsItem}>
        <p className={css.label}>Likes</p>
        <h4 className="quantity">{likes}</h4>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Profile;
