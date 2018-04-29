const receivePicture = (data) => ({type: 'GET', data})
const requestPicture = () => ({type: 'PENDING'})


function getPictures() {
  return ((dispatch, getState) => {
    dispatch(requestPicture())
    fetch('http://localhost:4242/api/pictures?amount=20')
      .then((response) => {
        response.json().then((data) => {
          dispatch(receivePicture(data))
      })
    })
  }
  )
}

export default getPictures;