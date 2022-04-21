import data from '../json/statistic.json';
import Statistics from './statCard';

export default function SectionsStat() {
  return <Statistics key="1" data={data} title="Upload stats" />;
}
