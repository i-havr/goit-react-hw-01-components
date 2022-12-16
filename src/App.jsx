import {Profile} from 'components/Profile/Profile';
import profile from 'assets/user.json';

import {StatisticsList} from 'components/StatisticsList/StatisticsList';
import statistics from 'assets/data.json';

import {FriendList} from 'components/FriendList/FriendList';
import friends from 'assets/friends.json';

import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';
import transactions from 'assets/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        key={profile.tag}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />

      <StatisticsList title="Upload stats" items={statistics} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
}
