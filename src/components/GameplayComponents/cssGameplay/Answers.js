import styled from 'styled-components';

const ContainerAns = styled.div`
  
  & .head {
    display: flex;
    flex-direction: row-reverse;
    margin: 0 20px;
    justify-content: space-around;

    & p {
      font-size: 20px;
      font-weight: bold;
    }

    & p:first-child {
      color: red;
    }
  }

  & .question {
    display: flex;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.main};
    height: 100px;
    align-items: center;
    justify-content: center;
    margin: 20px;

    & p {
      font-size: 18px;
      width: 100%;
      text-align: center;
    }
  }

`;

export default ContainerAns;
