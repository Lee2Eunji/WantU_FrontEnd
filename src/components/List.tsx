import styled from 'styled-components';
import Btn from './Btn';

export default function List() {
  return (
    <Container>
      <StyledGrid>
        <Item>
          <Btn imgSrc="./g_book2pro.webp" name="갤럭시 북2 Pro360" />
        </Item>
        <Item>
          <Btn imgSrc="./g_book2pro360.webp" name="갤럭시 북2 Pro" />
        </Item>
        <Item>
          <Btn imgSrc="./g_book2.webp" name="갤럭시 북2" />
        </Item>
        <Item>
          <Btn imgSrc="./g_bookflex2.avif" name="갤럭시 북 Flex2" />
        </Item>
        <Item>
          <Btn imgSrc="./g_bookgo.avif" name="갤럭시 북 GO" />
        </Item>
        <Item>
          <Btn imgSrc="./g_taps8.avif" name="갤럭시 탭 S8" />
        </Item>
        <Item>
          <Btn imgSrc="./g_taps8+.webp" name="갤럭시 탭 S8+" />
        </Item>
        <Item>
          <Btn imgSrc="./g_taps8u.avif" name="갤럭시 탭 S8 Ultra" />
        </Item>
        <Item>
          <Btn imgSrc="./g_tapa8.avif" name="갤럭시 탭 A8" />
        </Item>
      </StyledGrid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledGrid = styled.div`
  margin: 3rem 0;
  display: grid;
  gap: 3rem;
  grid-template-columns: 15vw 15vw 15vw;
  grid-template-rows: 20vw 20vw 20vw;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px #007acc;
  background-color: #f0f8ff;
`;
