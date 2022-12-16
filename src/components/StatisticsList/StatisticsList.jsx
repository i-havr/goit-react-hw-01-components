import PropTypes from 'prop-types';
import {Statistics} from 'components/StatisticsList/Statistics';
import css from 'components/StatisticsList/Statistics.module.css';

export const StatisticsList = ({ title, items }) => {
  return (
    <section className={css.statistics__list}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat__list}>
        {items.map(item => (
          <Statistics key={item.id} stats={item} />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
