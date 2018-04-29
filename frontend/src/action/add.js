const receivePicture = (elmt) => ({type: 'ADD', elmt})
const requestPicture = () => ({type: 'PENDING'})

const addPictures = (elmt) => {
  return (dispatch, getState) => {
    dispatch(requestPicture())
    fetch('http://localhost:4242/api/pictures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(elmt)
    }).then(() => {
      receivePicture(elmt)
    })
  }
}

export default addPictures;