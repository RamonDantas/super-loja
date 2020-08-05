import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cart';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const AddItemCart = ({ value }) => {
    const dispatch = useDispatch();    
    const productsToCart = useSelector(state => state.cart);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    function addItemCart(product) {
        const productCart = contProductCart(product);
        if(product.quantity > 0 && productCart.length < product.quantity){
            dispatch(addItem(product));
            console.log(product);
        } else {
            setOpen(true);
        }
    }

    function contProductCart(product) {
        return productsToCart.filter(productToCart => productToCart.id === product.id);
    }

    return (
    <div>
        <Button size="small" color="primary" onClick={() => addItemCart(value)}>
            <span className="material-icons">
                shopping_cart
            </span>
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning">
                Produto não possui estoque!
            </Alert>
        </Snackbar>
    </div>
    )
}