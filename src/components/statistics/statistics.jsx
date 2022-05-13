import PropTypes from 'prop-types';
import stile from './statistics.module.css';

export default function Statistics({ data, title }) {
  return (
    <section className={stile.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={stile.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={stile.item}>
              <span className={stile.label}>{label}</span>
              <span className={percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
