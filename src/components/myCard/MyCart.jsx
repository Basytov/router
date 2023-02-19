import React from "react";
import styled from "styled-components";

const MyCard = () => {
  return (
    <>
      <Container>
        <p>My Card Page bla bla</p>
      </Container>
    </>
  );
};

export default MyCard;

const Container = styled.div`
  font-size: 20px;
  width: 500px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
  height: 250px;
 padding-left: 20px;
`;

