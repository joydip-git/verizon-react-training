import React from 'react'

//reprsentational component
export default function Employee(props) {  
//    // const test = (v) => { console.log(this, v) };
//     const parentFnCallback =(arg)=> props.nameChangeHandler(arg);
//     const localCallback = function (...args) {
//         return parentFnCallback(args);
//     }
    return (
        <div>
            <p>
                Name: &nbsp;{props.name}
           </p>            
            <p>
                Adress: &nbsp;{props.address}
            </p>
            {/* {console.log(Employee.prototype)} */}
            
             {/* <input type='text' onChange={props.nameChangeHandler.bind(this,props.id)} value={props.name}/> */}
            <input type='text'
                onChange={
                    (e) => {
                        return props.nameChangeHandler(
                           e, props.name, props.id, props.address)
                    }}
                value={props.name} />
        </div>
    )
}

//event