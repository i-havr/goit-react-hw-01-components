import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils';
import css from 'components/StatisticsList/Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({ id: PropTypes.string.isRequired }),
};
