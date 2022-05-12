import PropTypes from 'prop-types';
import s from './card.module.css';

export default function Profile({ username, tag, avatar, location, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
