import PropTypes from 'prop-types';

import Card from './card.js';
import d from '../json/user.json';

export default function SectionCard() {
  return (
    <Card
      username={d.username}
      tag={d.tag}
      location={d.location}
      avatar={d.avatar}
      followers={d.stats.followers}
      views={d.stats.views}
      likes={d.stats.likes}
    />
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
