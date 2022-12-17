import { Profile } from 'components/Profile/Profile';
import profile from 'assets/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import statistics from 'assets/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from 'assets/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'assets/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
}
