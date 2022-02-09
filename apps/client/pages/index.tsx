
import SearchBar from '@components/SearchBar';
import Filters from '@components/Filters';
import FilterIcons from '@components/FilterIcons';
import CourseCards from '@components/CourseCards'
import Header from '@components/Header'

import {Container} from 'react-bootstrap';
export function Index() {
  return (

    <Container>
      <Header/>
      <SearchBar/>
      <Filters/>
      <FilterIcons/>
      <CourseCards/>
    </Container>
  );
}

export default Index;
