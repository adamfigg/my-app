// import React, { Component } from 'react';

// export default class Paintings extends Component {
// //     render() {
// //         return (
// //             <div>
// //                 {this.props.image}
// //                 {this.props.title}
// //             </div>
// //         );
// //     }
// // }


//  componentDidMount() {
//         const results = axios.get(`http://localhost:4000/`)
//             .then(res => res.data)
//             .then((finalResult) => {
//                 this.setState({
//                     paintings: finalResult
//                 });
//                 console.log(this.state)
//             });
//     }


// // export default Paintings;

//   render() {
//                 const Paintings = this.state.paintings
//             .map((data, i) => {
//               return (
//                 <div className= 'painting-display'> 
//                 <h1>{data.title}</h1>
//                 <img src={data.imageurl}/>
//                 <h3>size: {data.size}</h3>
//                 <h3>price: ${data.price}</h3>
//                 <br/>
//               </div>

//               )
               
//             })
//         } 