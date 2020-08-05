import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

function Cart() {
  return (
    <Wrapper>
      <Head>
        <h2>Your Cart</h2>
        <LightText>0 Items</LightText>
      </Head>
      <CartItem />
      <Foot>
        <div>
          <span>Total:</span>
          <Price>$0</Price>
        </div>
        <Button>Purchase</Button>
      </Foot>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: rgb(64, 31, 67);
  height: 1440px;
  width: 100vw;
  width: 100%;
  color: white;
  position: sticky;
`;

const Head = styled.div`
  padding-left: 30px;
  padding-top: 20px;
`;

const LightText = styled.span`
  color: lightgray;
`;

const Foot = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  bottom: 100px;
  left: 30px;
  span {
    font-size: 1.4em;
  }
`;

const Price = styled.span`
  margin-left: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 20px;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: white;
  background-color: rgb(255, 64, 110);
  padding: 10px 40px;
`;

export default Cart;
