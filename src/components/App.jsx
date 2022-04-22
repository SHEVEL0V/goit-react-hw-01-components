import Container from './container/container'
import SectionCard from './profile/section_card'
import SectionsStat from './statistics/stat_Section'
import SectionFrends from './friends/friendsSection'
import SectionTransaction from './history/section_History'
export const App = () => {
  return (
    <Container>

      <SectionCard/>
      <SectionsStat/>
      <SectionFrends/>
      <SectionTransaction/>

    </Container>
  );
};
