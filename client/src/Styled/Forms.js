import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  background: #c4ced4;
  max-width: 500px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 0 2rem;
`;

export const FormGroup = styled.div`
  margin: 1.2rem 0;
`;

export const Text = styled.div`
  display: block;
  margin-top: 0.3rem;
  color: #888;
`;

export const Input = styled.input`
  margin: 1.2rem 0;
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;

  ${props =>
    props.submit &&
    css`
      background: #0c2c56;
      color: #fff;

      &:hover {
        opacity: 0.8;
      }
    `}

`;

export const Header = styled.h1`
  text-align: center;
  color: #0c2c56
    ${props =>
      props.h3 &&
      css`
        text-align: center;
      `};
`;

