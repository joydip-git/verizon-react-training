import React from 'react'
import Employee from '../../components/Employee/Employee';

const App = () => {
    const people = [
        {
            id:1,
        name: 'anil',
        address:'bangalore'
        },
        {
        id:2,
            name: 'sunil',
            address: 'mumbai'
        }, {
            id:3,
            name: 'mahjhesh',
            address: 'chennai'
        }]
        ;
    function changeName(e, ...args) {     
       
        console.log(args)
        console.log(e)
    }
    return (
        <div>
            {console.log(this)}
            {/* <Employee name={people[0].name} address={people[0].address}
                nameChangeHandler={changeName.bind(this,people[0].id)} id={people[0].id}/> */}
             <Employee name={people[0].name} address={people[0].address}
                nameChangeHandler={changeName} id={people[0].id}/>
            <Employee name={people[1].name} address={people[1].address} id={people[1].id}
                nameChangeHandler={changeName} />
            <Employee name={people[2].name} address={people[2].address} id={people[2].id}
                nameChangeHandler={changeName} />
        </div>
    )
}
export default App;
