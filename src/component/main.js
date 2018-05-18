import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import Items from './items';
import ShopCar from './shopcar';
import Record from './record';
import "./../style/main.css";
// import Test from './test';
import Details from './details';



class Main extends Component{
    render(){
        return (
            <Router>
            <div className="container">
            <div className="nav">
            <ul>
            <li><Link to="/">商品列表</Link></li>
            <li><Link to="/shopcar">购物车</Link></li>
            <li><Link to="/record">购买记录</Link></li>
            </ul>
            </div>
            <div className="panel">
            <Switch>
            <Route exact path="/" component={Items}/>
            {/* </Route> */}
            <Route path="/shopcar" component={ShopCar}/>
            <Route path="/record" component={Record}/>
            <Route path="/:id" component={Details} />
            {/* <Route path="/test/:id" component={Test}/> */}
            </Switch>
            
              
            </div>
            </div>
            </Router>
        );
    } 
}
export default Main;