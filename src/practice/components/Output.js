import React from 'react'

// const Output = () => {
//   return (
//     <div>Output</div>
//   )
// }

// export default Output

const Output = (props) =>{
   
    return (
        <div>
            <h1>{props.here} {props.value}</h1>

        </div>
    )
}

export default Output