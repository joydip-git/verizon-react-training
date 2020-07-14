//import React, {Component} from 'react'

import printMe, { testFn } from './print'

export default function app() {
    const element = document.createElement('div');
    element.innerHTML = printMe() + ' ' + testFn();
    return element;
}