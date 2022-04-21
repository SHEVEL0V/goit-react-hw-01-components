import Friend from './friend';
import PropTypes from 'prop-types';
import s from './friend.module.css';

export default function FriendList({ data }) {
  return (
    <ul className={s.friendList}>
      {data.map(el => {
        const { avatar, name, isOnline, id } = el;
        return (
          <Friend
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}
Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  key: PropTypes.number,
};
