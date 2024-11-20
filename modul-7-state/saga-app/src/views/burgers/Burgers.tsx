import React, { FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { State } from "../../store";
import { fetch, add, remove } from "../../state/burgers";

export const Burgers = () => {
  const elements = useSelector((state: State) => state.burgers.data);
  const isLoading = useSelector((state: State) => state.burgers.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, []);

  const handleAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const ingredients = data.get("ingredients");
    const price = data.get("price");

    if (name !== null && ingredients !== null && price !== null) {
      dispatch(
        add({
          name: name as string,
          ingredients: ingredients as string,
          price: price as string,
        })
      );
    }
  };

  const handleRemoveClick = (elementId: string) => {
    dispatch(remove(elementId));
  };

  return (
    <>
      <h1>Burgers</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {elements.map((element) => (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.ingredients}</td>

                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveClick(element.id)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Form className="d-flex" onSubmit={handleAddSubmit}>
        <Form.Control type="text" name="name" placeholder="Enter name" />
        <Form.Control
          type="text"
          name="ingredients"
          placeholder="Enter ingredients"
        />
        <Form.Control type="text" name="price" placeholder="Enter price" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
