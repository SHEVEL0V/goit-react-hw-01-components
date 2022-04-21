import PropTypes from 'prop-types';
import s from './statCard.module.css';

export default function Stasistics({ data, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={s.statList}>
        {data.map(el => {
          return (
            <li key={el.id} className={s.item}>
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Stasistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
