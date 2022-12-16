import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      {/* {isOnline ? (
        <span className={css.status} style={{ backgroundColor: '#92FA5C' }}>
          
        </span>
      ) : (
        <span className={css.status} style={{ backgroundColor: '#F96A6A' }}>
          
        </span>
      )} */}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
