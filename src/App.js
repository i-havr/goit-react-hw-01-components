import Profile from 'components/Profile';
import profile from './user.json';

import Statistics from 'components/Statistics';
import statistics from './data.json';

import FriendList from 'components/FriendList';
import friendList from './friends.json';

import TransactionHistory from 'components/TransactionHistory';
import transactionHistory from './transactions.json';

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
    </div>
  );
}
