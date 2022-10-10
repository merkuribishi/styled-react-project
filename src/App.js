import styled from "styled-components";

const BlueButton = styled.button`
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #9105e8;
  color: #fff;
  border: none;
`;

function App() {
  return (
    <div className="App">
      <BlueButton>Hi</BlueButton>
    </div>
  );
}

export default App;
