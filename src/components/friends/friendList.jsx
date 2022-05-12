import FriendListItem from './friendListItem';
import PropTypes from 'prop-types';
import s from './friend.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(el => {
        return (
          <FriendListItem
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
