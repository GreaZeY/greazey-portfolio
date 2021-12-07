import styled from 'styled-components';

export const BgAnimWrap = styled.div`
// margin-left:4rem;
margin-top:110px;
// transform:scale(1.2);
@media ${(props) => props.theme.breakpoints.lg} {
  margin-top:170px;
}
@media ${(props) => props.theme.breakpoints.md} {
    margin-top:135px;
  }

  
`