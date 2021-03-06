import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";
import { Icon } from "react-icons-kit";
import { x } from "react-icons-kit/feather/x";
import UnstyledButton from "./UnstyledButton";

function CartItem({ id, title, quantity }) {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Item>
        <Top>
          <h3>{title}</h3>
          <CloseButton onClick={() => dispatch(removeItem({ id }))}>
            <Icon icon={x} />
          </CloseButton>
        </Top>
        <Bottom>
          <span className="label">Quantity:</span>
          <Quantity>{quantity}</Quantity>
        </Bottom>
      </Item>
    </Wrapper>
  );
}

const CloseButton = styled(UnstyledButton)`
  padding: 8px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Item = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  width: 90%;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 15px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  height: 50px;
  padding: 2px 15px;
  .label {
    color: lightgray;
    font-size: 18px;
  }
`;

const Quantity = styled.span`
  margin-left: 15px;
  padding: 0 5px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 3px solid white;
`;

export default CartItem;
