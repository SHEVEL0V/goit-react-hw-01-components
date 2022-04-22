import s from './friend.module.css';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={s[isOnline]}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}
