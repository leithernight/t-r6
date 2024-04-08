// import React, { useState } from 'react';

// function App() {

//   const [count, setCount] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const increment = () => {
//     setCount(count + 1)
//   }
  
//   return (
//     <div className='App'>
//       <button onClick={increment}>{count}</button>
//     </div>
//   );
// }

// export default App;

// import { render } from '@testing-library/react';
// import React, { Component } from 'react';
// class App extends Component {
//   state = {
//     count: 0,
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1});
//   }
  
//   decrement = () => {
//     this.setState({ count: this.state.count - 1});
//   };
  
//   render() {
//     return (
//       <div className='App'>
//         <button onClick={this.decrement}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={this.increment}>+</button>
//       </div>
//     )
//   }
// }

import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const inc = () => {
//     setCount(count + 1);
//   }
//   const dec = () => {
//     setCount(count - 1);
//   }
//   return (
//           <div className='App'>
//             <button onClick={dec}>-</button>
//             <span>{count}</span>
//             <button onClick={inc}>+</button>
//           </div>);
// }


// export default App;

// import Clicker from './Clicker';
// function App() {
//   const [isClicker, setClicker] = useState(false);

//   return (
//     <div className='App'>
//       <h2>app</h2>
//       <button onClick={() => setClicker(!isClicker)}>clicker</button>
//       {isClicker && <Clicker />}
//     </div>
//   )
// }

// import WithRef from './Ref';
// function App() {
//   return (
//     <div className='App'>
//       <h2>app</h2>
//       <WithRef />
//     </div>
//   )
// }

// import Clicker2 from './Clicker2';

// function App() {
//   const [isClicker2, setClicker] = useState(false);
//   return (
//     <div className='App'>
//       <h2>app!</h2>
//       <button onClick={() => setClicker(!isClicker2)}>click</button>
//       {isClicker2 && <Clicker2 />}
//     </div>
//   )
// }

import Effect from "./Effect"

function App() {
  return (
    <div className='App'>
      <Effect />
    </div>
  )
}

export default App;