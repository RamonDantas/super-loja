import React from 'react';
import { getProducts } from '../services/product';

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
                {products.map((product, index) =>{
                return <div key={index}>{product.id}</div>
                })}
            </div>
            
        );
    }
}
 
export default Home;