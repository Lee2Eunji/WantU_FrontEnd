import styled from "styled-components";
import Nav from "../components/Nav";

export default function Detail() {
    return (
        <>
            <Nav />
            <Container>
                <StyledH1>(제품 이름)의 최저가를 비교해 드렸어요!</StyledH1>
                <Collect>
                    <Category>
                        <StyledSpan>기관 명</StyledSpan>
                        <StyledSpan>제품 명</StyledSpan>
                        <StyledSpan>가격</StyledSpan>
                    </Category>
                    <Category2>
                        <StyledSpan2>학생복지스토어</StyledSpan2>
                        <StyledSpan2>(제품 이름)</StyledSpan2>
                        <StyledSpan2>(제품 가격)</StyledSpan2>
                    </Category2>
                    <Category2>
                        <StyledSpan2>교육할인스토어</StyledSpan2>
                        <StyledSpan2>(제품 이름)</StyledSpan2>
                        <StyledSpan2>(제품 가격)</StyledSpan2>
                    </Category2>
                    <Category2>
                        <StyledSpan2>공식홈</StyledSpan2>
                        <StyledSpan2>(제품 이름)</StyledSpan2>
                        <StyledSpan2>(제품 가격)</StyledSpan2>
                    </Category2>
                    </Collect>
            </Container>
        </>
    )
}

const Collect = styled.div`
display: grid;
grid-template-columns: 70vw; 
grid-template-rows: 10vw 10vw 10vw; 
`;

const Container = styled.div`

`;

const StyledH1 = styled.h1`
color: #d3d3d3;
text-align: center;
`;

const Category = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

margin: 2rem;
padding: 1rem 2rem;
border-bottom: 1px solid #808080;
`;

const StyledSpan = styled.span`
color: #d3d3d3;
`;

const Category2 = styled.div`
margin: 2rem;
padding-right: 1rem;
padding-left: 1rem;
padding-bottom: 2rem;
border-bottom: 1px solid #565656;
`;

const StyledSpan2 = styled.span`
color: #d3d3d3;
`;