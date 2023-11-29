import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile_components/Profile.jsx';
import Statistics from './Statistics_components/Statistics.jsx';
import FriendList from './Friends_components/Friends.jsx';
import TransactionHistory from './Transactions_components/Transactions.jsx';

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
