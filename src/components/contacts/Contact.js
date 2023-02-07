import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";
class Contact extends Component {
  state = {
    showcontactInfo: true,
  };


  ondeleteClike  = async (id,dispatch)=>{

 await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
   dispatch({type: "DELETE_CONTACT", payload: id});

  
  }

  render() {

    const { id ,name, email,phone } = this.props.contact; //?destructuring
    const { showcontactInfo } = this.state;

    return (
      <Consumer>

        {value=>{
          
          const {dispatch} = value
          return(
            <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({ showcontactInfo: !this.state.showcontactInfo })
            }
            className="fa fa-sort-down"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="fa fa-times"
            style={{ color: "red", 
            cursor: "pointer", float: "right" }}
            onClick={this.ondeleteClike.bind(this,id,dispatch)}
          ></i>
{/* <Link to={`contact/edit/${id}`}>

  <i 
  className="fa fa-pencil-alt" 
  style={{
    cursor:'pointer',
    float:'right',
    color:"black",
    marginRight : '1rem'
  }}></i>

</Link> */}

        </h4>
        {showcontactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
          )
        }}
      </Consumer>
     
    );
  }
}

Contact.propTypes = {
  
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  // deleteClikeHandeler : PropTypes.func.isRequired
};
export default Contact;
