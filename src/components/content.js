import React from "react";
import {Form} from 'react-bootstrap';
import './content.css';
class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      tech: 'PMS Plan',
      active:''
    };
    this.radioChange = this.radioChange.bind(this);
  }
  radioChange = evt => {
    this.setState({
      active: evt.currentTarget.value
    });
  }

  handleTitleChange = evt => {
    this.setState({ title: evt.target.value });
  };
   
  handleTypeChange = selectedOption => {
    this.setState({
      tech: selectedOption.target.value
    })
  };
  

  handleSubmit = () => {
    const form = {
      title:this.state.title,
      tech:this.state.tech,
      active:this.state.active
    }

    console.log(JSON.stringify(this.state));
    console.log(JSON.stringify(this.props));
    alert(`Project created: ${form.title} of type: ${form.tech} in active state as: ${form.active}`);

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
        <select id="lang" onChange={this.handleTypeChange.bind(this)} value={this.state.tech}>
        <option value="PMSP" label="PMS Plan">PMS Plan</option>
        <option value="Registry" label="Registry">Registry Report</option>
        <option value="CER" label="CER">CER</option>
       </select>
        <br />
        <br />
        <div>
            <span>Active:&nbsp;&nbsp;</span>
            <input type="radio"
                   value="Yes"
                   checked={this.state.active === "Yes"}
                   onChange={this.radioChange} />Yes&nbsp;&nbsp;
    
            <input type="radio"
                   value="No"
                   checked={this.state.active === "No"}
                   onChange={this.radioChange}/>No
            
            
          </div> 
        
        <button  disabled={!isEnabled}>Submit</button>
      </Form>
    </div>
   )
  } 
}

export default Content;