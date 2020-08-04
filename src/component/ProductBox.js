import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AddItemCart } from './AddItemCart';

class ProductBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const product = this.props; 
        return ( 
            <Card>
                <CardActionArea>
                    <CardMedia
                    image={product.picture}
                    title={product.brand}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.brand} - {product.price} R$
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <AddItemCart value={product}/>
                </CardActions>
            </Card>
         );
    }
}
 
export default ProductBox;