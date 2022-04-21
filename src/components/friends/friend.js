import s from './friend.module.css';

export default function Friend({ avatar, name, isOnline, key }) {
  return (
    <li key={key} class={s.item}>
      <span class={s[isOnline]}></span>
      <img
        class={s.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p class={s.name}>{name}</p>
    </li>
  );
}
