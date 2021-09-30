import FriendList from '../components/friend-list/FriendList';
import friends from '../components/friend-list/friends.json';

import Profile from '../components/profile/Profile';
import user from '../components/profile/user.json';

import Statistics from '../components/statistics/Statistics';
import statisticalData from '../components/statistics/statistical-data.json';

import TransactionHistory from '../components/transaction-history/TransactionHistory';
import transactions from '../components/transaction-history/transactions.json';

export default function App() {
  return (
    <div>
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
