import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { createRemoveAction, createBuyAction } from "../../state/shop-cart";
import {
  shopCartSelector,
  totalPriceSelector,
} from "../../state/shop-cart.selectors";

export const ShopCart = () => {
  const [show, setShow] = useState(false);
  const productsInCart = useSelector(shopCartSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBuy = () => {
    dispatch(createBuyAction());
    handleShow();
  };

  const handleRemoveClick = (productId: number) => {
    dispatch(createRemoveAction(productId));
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        🛒
        <Badge className="position-absolute" style={{ top: "34px" }}>
          {productsInCart.length}
        </Badge>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shop cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <tbody>
              {productsInCart.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td style={{ width: "50px" }}>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveClick(product.id)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} style={{ textAlign: "right" }}>
                  {totalPrice}
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBuy}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
