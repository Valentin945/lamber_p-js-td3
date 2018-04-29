const receivePicture = (id) => ({type: 'DELETE', id})
const requestPicture = () => ({type: 'PENDING'})

const delPictures = (id) => {
  return (dispatch, getState) => {
    dispatch(requestPicture())
    fetch('http://localhost:4242/api/pictures' + '/' + id, {
      method: 'delete'
    })
    .then(response => 
      response.json().then(json => {
        dispatch(receivePicture(id))
        return json
      })
    )
  }
}

export default delPictures