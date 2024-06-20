import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

export const Header = styled.h1`
  color: #2c3e50;
  margin-top: -10px
`;

export const ExpenseFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: -10px
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #34495e;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #bdc3c7;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ExpenseListContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const ExpenseItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ecf0f1;

  &:last-child {
    border-bottom: none;
  }
`;

export const ExpenseName = styled.span`
  color: #2c3e50;
`;

export const ExpenseDate = styled.span`
  color: #7f8c8d;
  font-size: 0.9em;
  margin-left: 10px
`;

export const ExpenseAmount = styled.span`
  color: #e74c3c;
  margin-right: 10px
`;

export const DeleteButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;
