import React from 'react';
class Access extends React.Component {
    
        constructor() {
            super();
            this.state = {
              selectedOption: ''
            };
          this.radioChange = this.radioChange.bind(this);
        }
        
          radioChange = e => {
            this.setState({
              selectedOption: e.currentTarget.value
            });
          }
          render(){
        return (
            
            <div>
            <span>Active:&nbsp;&nbsp;</span>
            <input type="radio"
                   value="Yes"
                   checked={this.state.selectedOption === "Yes"}
                   onChange={this.radioChange} />Yes&nbsp;&nbsp;
    
            <input type="radio"
                   value="No"
                   checked={this.state.selectedOption === "No"}
                   onChange={this.radioChange}/>No
            
            
          </div> 
        );
      }
    }
    

export default Access;