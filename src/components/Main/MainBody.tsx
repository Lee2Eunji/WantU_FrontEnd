import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { ButtonGroup, Button } from '@mui/material';
export default function MainBody({ children }: { children: JSX.Element }) {
  return <StyledMainBody>{children}</StyledMainBody>;
}

const StyledButtonGroup = styled.div`
  background: none;
  border: none;
`;

const boxinit = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
`;

const StyledMainBody = styled.main`
  width: 100%;
  animation: ${boxinit} 1.5s linear;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  max-height: 800px;
  background-color: #0a1929;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  line-height: 1.2;
`;
