import s from './card.module.css';

export default function Card({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
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
