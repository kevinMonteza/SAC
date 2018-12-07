import React, { Component } from 'react';

class Checkbox extends Component {
   
    constructor(){
        super();
        this.state = {
            isChecked: false
        }
    }

    
    componentWillMount() {
        //console.log(`willmount del hijo ${this.props.check}`);
        this.setState({
            isChecked:this.props.check
        })
    }
    
    componentWillReceiveProps(props){
      //  console.log(props);
        this.setState({
            isChecked: this.props.check
        })
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(label);
    }
   

    render() {
        //console.log("componente hijo actulizando ...");
        const { label } = this.props;
        const { isChecked } = this.state;
      //  console.log(isChecked);
        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                </label>
            </div>
        );
    }
}

export default Checkbox;