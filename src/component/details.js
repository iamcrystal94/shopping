import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import './../style/detail.css';


class Details extends Component{
    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
        this.onMinus = this.onMinus.bind(this);
        this.chooseCima = this.chooseCima.bind(this);

        this.state = {
            shop:[],
            num: 0,
            id: this.props.match.params.id,
            cima:0,
        };
        
    }
   componentDidMount(){
       fetch('./shop.json')
       .then((response)=>response.json())
       .then((responseData)=>{
        //    console.log(responseData);
            this.setState({shop:responseData});
            // console.log(this.state.shop);
        })
        .catch((error) => {
            console.log("Error fetching and parding data", error);
        });   
   }
    chooseCima(e){
        console.log("target: ",e.target.innerHTML,"classname:",e.target.className);
        e.target.className = "selected";   
        this.setState({cima: e.target.innerHTML});
        console.log("changed className", e.target.className);
        // console.log("state cima",this.state.cima);
        
    }
    onAdd(){   
        this.setState({num:this.state.num+1});
        console.log(this.state.num);
    }
    onMinus(){
        if(this.state.num>=1){
        this.setState({num:this.state.num-1});
    };
        console.log(this.state.num);    
    }
    
   
    render(){
        var Myitem=()=>{
            // console.log('enter myitem');
            // console.log(this.state.id);
            for (let x in this.state.shop) {
                // console.log(this.state.shop[x].id);
            if (this.state.shop[x].id === Number(this.state.id)) {
                // console.log(this.state.shop[x]);
                // console.log(this.state.shop[x].mashu);

                return (
                <div className="detail">
                    <img src={"../images/" + this.state.shop[x].src} alt="shoes"/>
                    <div className="name">{this.state.shop[x].name}</div>
                        <div className="price">价格<div className="price-num">¥{this.state.shop[x].price}</div></div>
                    <div className="mashu">尺码
                        <ul className="allmashu">{this.state.shop[x].mashu.map((cima, i)=>
                        <li className="cima"  id={i} key={i} onClick={this.chooseCima}>{cima}</li>)}
                    </ul></div>
                    <div className="count">
                        数量<div className="desc">
                            <div className="add" onClick={this.onAdd}>+</div>
                            <div className="num">{this.state.num}</div>
                            <div className="minus" onClick={this.onMinus}>-</div>
                        </div>
                    </div>
                    <div className="addtocar">加入购物车</div>
                   
            </div> );
            }         
        }
            return <div className="loadfail">数据加载中...</div>;
    }
        return (
            <Myitem/>
    )
    }
}
Details.propTypes = {
    id: PropTypes.number,
}
export default Details;