import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getStoreItems } from ".././reducers/index";
import CartItem from "./CartItem";

function Cart() {
  const storeItems = useSelector(getStoreItems);

  let totalPrice = storeItems.reduce((totalPrice, item) => {
    return (totalPrice += item.price * item.quantity);
  }, 0);

  totalPrice = totalPrice / 100;

  return (
    <Wrapper>
      <Head>
        <h2>Your Cart</h2>
        <LightText>0 Items</LightText>
      </Head>
      {storeItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
          />
        );
      })}
      <Foot>
        <div>
          <span>Total:</span>
          <Price>{totalPrice}</Price>
        </div>
        <Button>Purchase</Button>
      </Foot>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: rgb(64, 31, 67);
  height: 2000px;
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
