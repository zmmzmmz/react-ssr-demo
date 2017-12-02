function submitForm () {
  let e = window.event
  e.preventDefault()
}

function submits () {
  let username = document.getElementById('username').value
  let password = document.getElementById('inputPassword').value
  if (!username || !password) {
    return
  }
  axios.post('/api/0.1/login', {username, password}).then(data => {
    window.token = data.data.token
  })
}


function loginAdmin () {
  console.log(window.token)
  axios.get('/manager', {
    headers: {
      'Authorization': 'Bearer ' + window.token
    }
  }).then(res => {
    console.log(res)
  })
}
