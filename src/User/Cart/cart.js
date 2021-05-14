import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

class Cart extends Component {
  // const [state, setState] = useState(0);
  // constructor(){
  // super();
  // this.state = {
  // nameproduct: '',
  // price: '',
  // redirectToReferrer: false
  // };
  // this.login = this.login.bind(this);
  // this.onChange = this.onChange.bind(this);

  // login() {
  // if(this.state.nameproduct && this.state.price){
  // PostDataProduct('',this.state).then((result) => {
  // let responseJson = result;
  // if(responseJson.userData){
  // sessionStorage.setItem('userData',JSON.stringify(responseJson));
  // this.setState({redirectToReferrer: true});
  // }
  //  else
  // lert(result.error);
  // });
  // }
  //  }
  // onChange(e) {
  // this.setState({[e.target.name]:e.target.value});
  // }
  // render() {
  // if (this.state.redirectToReferrer) {
  // return (<Redirect to={'/home'}/>)
  // }
  // if(sessionStorage.getItem('userData')){
  // return (<Redirect to={'/home'}/>)
  // }

  render() {
    console.log(localStorage.getItem("userName"));
    return (
      <Router>
        <div className="App">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>USB Kingston 32GB</Card.Title>
              <Card.Text>250000 VND</Card.Text>
              <Button variant="primary">Thêm vào giỏ hàng</Button>
            </Card.Body>
          </Card>
        </div>
      </Router>
    );
  }
}
export default Cart;
