import PropTypes from 'prop-types';

import data from '../json/friend.json';
import FriendList from './friendList';

export default function SectionFrends() {
  return <FriendList data={data} />;
}

FriendList.propTypes = {
  data: PropTypes.array,
};