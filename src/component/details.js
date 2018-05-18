import React, {Component} from 'react';
import 'whatwg-fetch';
import './../style/detail.css';


class Details extends Component{
    constructor(props) {
        super(props);
        this.state = {
            shop:[],
            num: 0,
            id: this.props.match.params.id,
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
        // console.log(typeof this.state.shop);
        
        // console.log(this.state.shop[0]);
        // console.log(myitem);
        // this.setState({myitem:myitem});
       
    //    this.setState({ myitem: myitem });
        
   }
    render(){
        var Myitem=()=>{
            console.log('enter myitem');
            // console.log(this.state.id);
            for (let x in this.state.shop) {
                // console.log(this.state.shop[x].id);
            if (this.state.shop[x].id === Number(this.state.id)) {
                console.log(this.state.shop[x]);                
                return (
                <div className="detail">
                    <img src={"../images/" + this.state.shop[x].src} alt="shoes"/>
                    <div className="name">{this.state.shop[x].name}</div>
                    <div className="price">价格<div className="price-num">{this.state.shop[x].price}</div></div>
                    <div className="mashu">尺码<div className="allmashu">{this.state.shop[x].mashu.map((i)=>
                        <div className="cima" key={i}>{i}</div>)}
                    </div></div>
                    <div className="count">
                        数量<div className="desc">
                            <div className="add">+</div>
                            <div className="num">{this.state.num}</div>
                            <div className="odd">-</div>
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
export default Details;