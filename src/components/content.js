import React from "react";
import {Form} from 'react-bootstrap';
import Access from './access';
import './content.css';
class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  handleTitleChange = evt => {
    this.setState({ title: evt.target.value });
  };

  handleSubmit = () => {
    const { title } = this.state;
    alert(`Signed up with email: ${title}`);
  };
  render(){
    const { title } = this.state;
    const isEnabled = title.length > 0;
   return(
  
    <div>
    <Form onSubmit={this.handleSubmit}>
    <div className="header"> Create a Project/Program </div>
        Title*:
        <br />
        <input 
        type="text"
        placeholder="Type the project title"
        value={this.state.title}
        onChange={this.handleTitleChange}
        />
        <br />
        Type:
        <br />
        <select>
        <option value="PMSP">PMS Plan</option>
        <option value="Registry">Registry Report</option>
        <option value="CER">CER</option>
      </select>
        <br />
        <br />
        <div><Access/></div>
        
        <button  disabled={!isEnabled}>Submit</button>
      </Form>
    </div>
   )
  } 
}

export default Content;