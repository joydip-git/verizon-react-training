import React from 'react'

export default function Employee(empProperties) {
    return (
        <p>
            Name:<span>{empProperties.name}</span>
            <br />
            Age:<span>{empProperties.age}</span>
        </p>
    );
}
