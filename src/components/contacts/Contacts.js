import React, { Component } from "react";
import { Consumer } from "../../context";
import Contact from "./Contact";
class Contacts extends Component {
 
//   deletecontact=(id)=>{
// const {contacts} = this.state;
// const newContacts= contacts.filter(contact =>
// contact.id !== id

// )
// this.setState({
//     contacts:newContacts
// })
//   }
  render() {

    return(
      <Consumer>
        {value =>{
          const{contacts}  = value
          return( <React.Fragment>
          <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List</h1>
        {contacts.map((item) => (
         
          <Contact
          key={item.id} contact={item}
            // key={item.id}
            // id={item.id}
            // name={item.name}
            // email={item.email}
            // phone={item.phone}
            // deleteClikeHandeler={this.deletecontact.bind(this,item.id)}
          />
        ))}
      </React.Fragment>)
        }}
      </Consumer>
    )
  
  }
}

export default Contacts;
