import Container from './container/container'
import SectionCard from './profile/card'
import SectionsStat from './statistics/statSection'
import SectionFrends from './friends/friendsSection'
export const App = () => {
  return (
    <Container>

      <SectionCard/>
      <SectionsStat/>
      <SectionFrends/>
    </Container>
  );
};
