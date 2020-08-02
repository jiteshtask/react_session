import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContactList, getContactList } from '../../actions/auth_actions';


class ContactRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.mobile}</td>
        <td>{this.props.contact.email}</td>
      </tr>
    );
  }
}

class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact) => {
      rows.push(<ContactRow key={contact.key} contact={contact} />);
    });
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th><i className="fa fa-fw fa-user"></i>Name</th>
            <th><i className="fa fa-fw fa-phone"></i>Phone</th>
            <th><i className="fa fa-fw fa-envelope"></i>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}


class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts : []
    };
  }

  componentDidMount(){
    this.props.getContactList()
  }

  addContact =  async (contact) =>{
      await this.props.addContactList(contact);
      await this.props.getContactList()
  }
  
  render() {
    return (
      <div>
        <h1>React Contacts List App</h1>
        <NewContactRow addContact={this.addContact}/>
        <ContactTable
          contacts={this.props.contacts && this.props.contacts.toJS().length > 0 ?  this.props.contacts.toJS() : []}
        />
      </div>
    );
  }
}

class NewContactRow extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const mobile = target.mobile.value;
    const email = target.email.value;
    
    var contact = {
      name ,
      mobile ,
      email 
    };
    this.props.addContact(contact);
  }
   
  render(){
    return (
      
       <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-3">
            <input type="text" name="name" className="form-control" id="nameInput" placeholder="Name" style={{border: "3px solid"}}/>
          </div>
          <div className="col-md-3">
            <input type="text" name="mobile" className="form-control" id="phoneInput" placeholder="Phone" style={{border: "3px solid"}}/>
          </div>
          <div className="col-md-3">
            <input type="email" name="email" className="form-control" id="emailInput" placeholder="Email" style={{border: "3px solid"}}/>
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-plus"></i>Add</button>
          </div>
        </div>
      </form>   
    )
  }
}


function mapStateToProps(state) {
  return {
    contacts: state.auth.get('contacts')
  };
}
export default connect(mapStateToProps, {
  addContactList, 
  getContactList
})(FilterableContactTable);
