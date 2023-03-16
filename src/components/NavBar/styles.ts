import styled from 'styled-components';

type TNav = {
  secondaryElement?: boolean;
}

export const Nav = styled.nav<TNav>`
  display: flex;
  justify-content: ${props => props.secondaryElement ? "space-around" : "center"};
  align-items: center;
  padding: 2rem 2.5rem; 
  margin-bottom: 70px;
`;

