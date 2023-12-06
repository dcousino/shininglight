import styled from "styled-components";
const inputWidthsReg = 80;
const inputWidthsSmall = 100;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondaryVeryLight};
  padding: 20px 0;
`;
export const Form = styled.form`
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.4s ease-in-out;
  border-radius: 10px;
  margin: -100px auto -40px auto;
  position: relative;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  width: ${inputWidthsReg}%;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 7px 0;
  ::placeholder {
    font-family: "Sacramento", sans-serif;
    padding: 5px;
  }
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    width: ${inputWidthsSmall}%;
    font-size: 1rem;
  }
`;
export const Select = styled.select`
  width: ${inputWidthsReg}%;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 7px 0;
  font-family: "Sacramento", sans-serif;
  option {
    font-family: sans-serif;
  }
  font-size: 1.2rem;
  color: rgb(117, 117, 117);
  @media screen and (max-width: 768px) {
    width: ${inputWidthsSmall}%;
    font-size: 1rem;
  }
`;

export const Button = styled.input`
  border: none;
  font-family: "Cormorant", sans-serif;
  text-decoration: none;
  padding: 1rem 4rem;
  background-color: #333;
  color: ${(props) => props.theme.colors.offwhite};
  letter-spacing: 0.1em;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-family: "Sacramento", sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
  color: #fff;
  align-self: center;
  margin: 0 auto;
`;

export const TextArea = styled.textarea`
  width: ${inputWidthsReg}%;
  height: 150px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 10px 0;
  ::placeholder {
    font-family: "Sacramento", sans-serif;
    padding: 5px;
  }
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    width: ${inputWidthsSmall}%;
    font-size: 1rem;
  }
`;
