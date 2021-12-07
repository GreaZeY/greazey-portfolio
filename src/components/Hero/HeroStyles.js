import styled from 'styled-components';

export const LeftSection = styled.div`


  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 180px auto;
    
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 80px auto;
    transition:1s ease;
  }
`;
