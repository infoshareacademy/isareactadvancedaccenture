import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { State } from "../store";
import { add, remove, rent, returnVHS } from "../state/rental-office-toolkit";

export const RentalOffice = () => {
    const elements = useSelector((state: State) => state.rentalOffice);
    const dispatch = useDispatch();

    const handleRentClick = (elementId: number) => { 
        dispatch(rent(elementId))
    }

    const handleReturnClick = (elementId: number) => { 
        dispatch(returnVHS(elementId))
    }

    const handleAddSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name');
        

        if (name !== null) {
            dispatch(add((name as string)));
        }
    }

    const handleRemoveClick = (elementId: number) => { 
        dispatch(remove(elementId))
    }

    return <>
        <h1>RentalOffice</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th style={{ width: "80px" }} />
                <th style={{ width: "50px" }} />
            </tr>
            </thead>
            <tbody>
                {
                    elements.map(element => (
                        <tr key={element.id}>
                            <td>{element.name}</td>
                            <td>
                                {
                                    element.isRented
                                        ? <Button variant="secondary" onClick={() => handleReturnClick(element.id)}>Return</Button>
                                        : <Button variant="primary" onClick={() => handleRentClick(element.id)}>Rent</Button>
                                }
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleRemoveClick(element.id)}>
                                    X
                                </Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        <Form className="d-flex" onSubmit={handleAddSubmit}>
            <Form.Control type="text" name="name" placeholder="Enter name" />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}