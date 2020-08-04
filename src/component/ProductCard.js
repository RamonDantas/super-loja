import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                    <Button size="small" color="primary">
                    Saiba mais
                    </Button>
                    <Button size="small" color="primary" onClick={() => product.addItemCart(product)}>
                        <span className="material-icons">
                            shopping_cart
                        </span>
                    </Button>
                </CardActions>
            </Card>
         );
    }
}
 
export default ProductBox;