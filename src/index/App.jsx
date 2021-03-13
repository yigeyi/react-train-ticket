import './App.css';

import {connect } from 'react-redux'; //取出connect

function App(props){
  return(
    <div>
      123
    </div>
  )

}
//connect返回值是一个函数
export default connect(
  function mapStateToProps(state){
    return state;
  },
  function mapDispatchToProps(dispatch){
    return dispatch;
  }
)(App);