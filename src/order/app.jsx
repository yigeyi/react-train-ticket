import './App.css';

import {connect } from 'react-redux'; //取出connect

function App(props){

}
//connect返回值是一个函数
export default connect(
  function mapStateToProps(state){},
  function mapDispatchToProps(dispatch){}
)(App);