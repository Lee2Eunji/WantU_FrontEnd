import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
/* 
상품의 이름+ 부가 정보
*/

/*
처음 컴포넌트 랜더링 시 타입 검증
*/

export default function ItemDetailTitle(): JSX.Element {
  return (
    <>
      <StyledItemTitleArea>
        <h1>제목이 들어갈 위치</h1>
      </StyledItemTitleArea>
    </>
  );
}

const StyledItemTitleArea = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: 1.5px solid black;
`;
