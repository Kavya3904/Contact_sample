// import React, { Component } from "react";
// import Contacts from "./Contacts";

// class AddContact extends Component {
// constructor(props){
// super(props)
// this.nameInput = React.createRef();
// this.emailInput = React.createRef();
// this.phoneInput = React.createRef();
// }
// onSubmit=e=>{
//   e.preventDefault();
//   const contact ={
//     name:this.nameInput.current.value,
//     email:this.emailInput.current.value,
//     phone:this.phoneInput.current.value,
//   }  
//   console.log(contact); 
// }


// static deafultProps ={
//     name:"kavya",
//     email:"kavya@gmail.com",
//     phone:'9495356831'
// }

//   render() {
//     const {name,email,phone}=this.state;
//     return (
//       <div className="card mb-3">
//         <div className="card-header">Add Contact</div>
//         <div className="card-body">
//           <form onSubmit={this.onSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control form-control-lg"
//                 placeholder="Enter name"
//                 defaultvalue={name}
//                 ref={this.nameInput}
              
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control form-control-lg"
//                 placeholder="Enter email"
//                 defaultvalue={email}
//                 ref={this.emailInput}
           
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 className="form-control form-control-lg"
//                 placeholder="Enter phone"
//                 deafaultvalue={phone}
//                 ref={this.phoneInput}
            
//               />
//             </div>
//             <input
//               type="submit"
//               value="Add Contact"
//               className="btn btn-light btn-block"
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// export default AddContact;
