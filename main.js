import {createElement, Component, render} from './toy-react'

// for(let i of [1, 2, 3]) {
//     console.log(i)
// }

class MyComponent extends Component {
    render(){
        return <div>
            <h1>my Component</h1>
            {this.children}
        </div>
    }
}

// document.body.appendChild()
render(<MyComponent id="a" class="es">
<div>123</div>
<div>345</div>
<div>5566</div>
</MyComponent>, document.body)