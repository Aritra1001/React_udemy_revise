import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/counter_slice';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter); //making the subscription to the store from the component
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // type: {SOME_UNIQUE_IDENTIFIER, payload: 5} 
  }

  const decrementhandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleCounter());
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// Redux with class based component
// class Counter extends Component {

//   incrementHandler = () =>{
//     this.props.increment();
//   }

//   decrementhandler = () => {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {

//   }

//   render() {
//     return (
//       <>
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//             <button onClick={this.decrementhandler.bind(this)}>Decrement</button>
//           </div>
//           <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//       </>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     counter: state.counter
//   }
// }

// const mapDispatchToprops = (dispatch) => {
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToprops)(Counter);