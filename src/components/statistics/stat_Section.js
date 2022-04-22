import PropTypes from 'prop-types';
import data from '../json/statistic.json';
import Statistics from './stat_Card';

export default function SectionsStat() {
  return <Statistics data={data} title="Upload stats" />;
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
