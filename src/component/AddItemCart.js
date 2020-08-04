import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cart';
import Button from '@material-ui/core/Button';


export const AddItemCart = ({ value }) => {
    const dispatch = useDispatch()

    function addItemCart(product) {
        dispatch(addItem(product));
        console.log(product);
    }

    return (
    <div>
        <Button size="small" color="primary" onClick={() => addItemCart(value)}>
            <span className="material-icons">
                shopping_cart
            </span>
        </Button>
    </div>
    )
}