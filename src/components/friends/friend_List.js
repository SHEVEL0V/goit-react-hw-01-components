import Friend from './friend';
import PropTypes from 'prop-types';
import s from './friend.module.css';

export default function FriendList({ data }) {
  return (
    <ul className={s.friendList}>
      {data.map(el => {
        return (
          <Friend
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
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
};
