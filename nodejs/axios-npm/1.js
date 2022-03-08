const axios = require('axios');
const fs = require('fs');

// Make a request for a user with a given ID
axios.get('https://exp-picture.cdn.bcebos.com/3d002dbad341037ddebae3c5a9bc7dc5ce672d20.jpg',{
  responseType: 'arraybuffer'
})
  .then(function (response) {
    // handle success
    console.log(Object.prototype.toString.call(response.data))
    fs.writeFile('1.jpg', response.data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })