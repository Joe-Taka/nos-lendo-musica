import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;

  input {
    width: 30vw;
  }

  label {
    align-self: start;
  }
`;