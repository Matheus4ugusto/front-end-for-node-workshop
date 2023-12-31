import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  background-color: ${({theme}) => theme.colors.black.pure};
  width: 80%;
  min-height: 80%;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  padding: 2rem;
  gap: .5rem;

  button {
    color: white;
    font-size: 2rem;
    background-color: ${({theme}) => theme.colors.blue.deep};
    padding: 1rem;
    border-radius: 10px;
    transition: all .5s;

    &:hover {
      transform: scale(1.1);
      background-color: ${({theme}) => theme.colors.blue.midnight};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray.pure};
  }

  label {
    color: ${({theme}) => theme.colors.white.pure};
  }

  #title {
    width: 40%;
    height: 2rem;
    border-radius: 10px;
    @media (max-width: 1024px) {
      width: 70%;
    }
    @media (max-width: 425px) {
      width: 90%;
    }
  }

  #fileInput {
    background-color: transparent;
    font-size: 1rem;
    @media (max-width: 425px) {
      font-size: 0;
    }

  }

`;

export const Input = styled.input`
  background-color: ${({theme}) => theme.colors.blue.deep};
  border: none;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.white.pure};
  padding-left: .7rem;
  margin-bottom: .5rem;

  &:focus {
    outline: none;
  }

  &::file-selector-button {
    color: ${({theme}) => theme.colors.white.pure};
    background-color: ${({theme}) => theme.colors.blue.deep};
    border: none;
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    @media (max-width: 425px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 375px) {
      font-size: 1rem;
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.blue.midnight};
    }
  }
`;

export const TextArea = styled.textarea`
  background-color: ${({theme}) => theme.colors.blue.deep};
  color: ${({theme}) => theme.colors.white.pure};
  resize: none;
  border: none;
  border-radius: 10px;
  margin-bottom: .5rem;
  font-size: 1.3rem;
  padding: .5rem;
  height: 7rem;
  @media (max-width: 1440px) {
    height: 9rem;
  }
  @media (max-width: 1024px) {
    height: 11rem;
  }
  @media (max-width: 768px) {
    height: 15rem;
  }
  @media (max-width: 425px) {
    height: 20rem;
  }

  &:focus {
    outline: none;
  }
`;