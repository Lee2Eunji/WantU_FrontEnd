import styled from 'styled-components';
import Nav from '../components/Nav';

export default function Detail() {
  return (
    <>
      <Nav />
      <Container>
        <StyledH1>(제품 이름)</StyledH1>
        <Collect>
          <Category2>
            <StyledSpan2>기관 명</StyledSpan2>
            <StyledSpan2>가격</StyledSpan2>
          </Category2>
          <Category2>
            <StyledSpan2>학생복지스토어</StyledSpan2>
            <StyledSpan2>(제품 가격)</StyledSpan2>
          </Category2>
          <Category2>
            <StyledSpan2>교육할인스토어</StyledSpan2>
            <StyledSpan2>(제품 가격)</StyledSpan2>
          </Category2>
          <Category2>
            <StyledSpan2>공식홈</StyledSpan2>
            <StyledSpan2>(제품 가격)</StyledSpan2>
          </Category2>
        </Collect>
      </Container>
    </>
  );
}

const Collect = styled.div`
  display: grid;
  background-color: black;
  grid-template-columns: 70vw;
  grid-template-rows: 10vw 10vw 10vw 10vw;

  margin-bottom: 2rem;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

height: 100%;

background-color: black;
`;

const StyledH1 = styled.h1`
  padding-top: 5%;

  background-color: black;
  color: #d3d3d3;
  text-align: center;
`;

const Category2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

  margin: 0 2rem;
  padding: 1rem 1rem;
  border-bottom: 1px solid #565656;
`;

const StyledSpan2 = styled.span`
  color: #d3d3d3;
`;
