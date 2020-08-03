import React from 'react';
import { getProducts } from '../services/product';
import { Container } from '@material-ui/core';
import ProductBox from './ProductCard';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
            products: [],
         }
    }

    componentDidMount = async () => {
        const response = await getProducts();
        console.log(response.data);
        this.setState({
            products: response.data,
        });
    };
    
    render() { 
        const {products} = this.state;
        
        return (
            <div>
                <Container>
                    <div className="row">
                        {products.map((product, index) =>{
                        return <div key={index} className="col-12 col-md-4 my-3"><ProductBox {...product}/></div>
                        })}
                    </div>
                </Container>
                
            </div>
            
        );
    }
}
 
export default Home;