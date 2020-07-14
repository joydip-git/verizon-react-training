import React from 'react'
import Employee from './components/Employee/Employee'

// const e1 = Employee({name:'joydip', age: 20});
//const e1 = <Employee name='joydip' age={20}/>
/**
 * {
 * key:'1'
 * type:'p'
 * props:{ 
 *  name:'joydip',
 *  age:20
 * }
 * }
 */
function App() {
  return (
    <div>
      <Employee name='joydip' age={20}/>   
      <br />
      <Employee name="Rupa" age={30}/> 
      <br />
      <Employee name="Xavier" age={20} /> 
    </div>
  );
}
export default App;