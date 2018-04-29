import React from 'react';
import SinglePhoto from '../common/singlePhoto.jsx'
import CustomButton from '../common/button.jsx'
import { connect } from "react-redux";
import  getPictures from '../action/get'

function mapStateToProps(state, ownProps) {
  return {
    data: state.act
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPictures: () => {
      dispatch(getPictures())
    }
  };
};

class Home extends React.Component
{
  constructor(props) {
    super(props)
    this.getPhotos = this.getPhotos.bind(this)
    this.reload = this.reload.bind(this)
  }

  reload() {
    window.location.reload()
  }

  getPhotos() {
    const { getPictures, data } = this.props
    const res = []
    let index = 0
    for (const x in data)
    {
      res.push(<SinglePhoto key={index} link={data[x].picture} />)
      index++
    }
    return res;
  }

  componentWillMount() {
    const { getPictures } = this.props
    getPictures();
  }

  shouldComponentUpdate(nextProps) {
        return true;
  }

  render() {
    const listPhoto = this.getPhotos();
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <CustomButton text='reload' func={this.reload} />
        </div>
        {listPhoto}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);