import Container from './container/container'
import Profile from './profile/profileCard'
import Statistics from './statistics/statistics';
import FriendList from './friends/friendList';
import TransactionHistory from './history/transactionsHistori'

import user from '../data/user.json'
import data from '../data/statistic.json'
import friends from '../data/friend.json'
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <Container>

      <Profile username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}/>
      <Statistics data={data} title ="Upload stats"/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </Container>
  );
};
