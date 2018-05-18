import React, { Component } from 'react';
import "./../style/items.css";
import  'whatwg-fetch';
// import Details from './details';
// import Test from './test';
import { Link } from 'react-router-dom';

class Items extends Component{
    constructor(){
        super();
        this.state={
            shop:[],
        };
    }
        componentDidMount() {
        fetch('./shop.json')
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({shop:responseData})
        })
        .catch((error) => {
            console.log("Error fetching and parding data", error);
        });
    }
    
    render(){      
        return(
            <div className="items-list">
                {
                    this.state.shop.map((product) => (
                        <div className="item" key={product.id}>
                            <img src={'../images/' + product.src} alt="shoes" />
                            <div className="price">{product.price}{"元"}</div>
                            <div className="name">
                                {/* <Link to={'/detail/'+product.id}>{product.name}</Link> */}
                                <Link to={`/${product.id}`} >{product.name}</Link>
                                
                            </div>
                            {/* <Route path="detail/:id" render={(props)=><Test id={product.id} {...props}/>}/> */}
                            {/* <Route path="/detail/:id" component={Test}/>> */}
                        </div>
                        
                    ))
                }
                
            </div>
            
                 
    );
    }
}
export default Items;