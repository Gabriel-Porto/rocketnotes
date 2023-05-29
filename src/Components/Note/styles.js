import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 112px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
  align-items: left;
  
  > h1 {
    flex: 1;
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    align-items: center;

  }
`
