import styled from 'styled-components';
import List from '../components/List';
import Nav from '../components/Nav';

export default function A_list() {
  return (
    <div>
      <Nav />
      <StyledDiv>
        <StyledH1>LG</StyledH1>
        <List />
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  background-color: black;
`;

const StyledH1 = styled.h1`
  padding-top: 3%;
  text-align: center;
  color: white;
`;
