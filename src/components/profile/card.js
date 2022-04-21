import Card from './cardPr';
import infoProf from '../json/user.json';
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = infoProf;

export default function SectionCard() {
  return (
    <Card
      key="1"
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      followers={followers}
      views={views}
      likes={likes}
    />
  );
}
