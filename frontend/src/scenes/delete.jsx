import React from 'react';
import '../CSS/add.css'
import CustomButton from '../common/button.jsx'
import { connect } from "react-redux";
import delPictures from '../action/delete'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    delPictures: (id) => dispatch(delPictures(id))
  }
}

class Delete extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      id: ''
    }
    this.submitFunction = this.submitFunction.bind(this)
  }

  submitFunction()
  {
    const {id} = this.state
    // console.log(id)
    if (id != '' && isNaN(id) == false)
    {
      console.log(id)
      this.props.delPictures(id)
    }
  }

  render()
  {
    return (
      <div className="myform">
        <div className="form-elmt">
          <label> ID</label>
          <div className="inputStyle">
            <input type="text" value={this.state.id} onChange={(e) => this.setState({id: e.target.value})} /> 
          </div>
        </div>
        <div className="form-elmt" style={{display: 'block'}}>
          <CustomButton text="Delete" func={this.submitFunction}/>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Delete);