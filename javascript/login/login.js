let flalogin = false;
let usuario = '';
localStorage.setItem('flaglogin', 'false');

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  function loginUser(username, password) {
    return new Promise((resolve, reject) => {
      fetch('../javascript/login/clientes.json')
        .then(response => response.json())
        .then(data => {
          const user = data.find(user => user.username === username && user.password === password);
          if (user) {
            resolve(user);
          } else {
            reject(new Error('Invalid username or password'));
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  loginUser(username, password)
  .then(user => {
    console.log('Login successful:', user);
    registro = 'Login'
    RegistroValidado(registro)
  })
  .catch(error => {
    console.log('Login error:', error);
  });

})

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  function registerUser(username, password) {
    return new Promise((resolve, reject) => {
      fetch('../javascript/login/clientes.json')
        .then(response => response.json())
        .then(data => {
          const userExists = data.some(user => user.username === username);
          if (userExists) {
            reject(new Error('Username already exists'));
          } else {
            const newUser = { username, password };
            data.push(newUser);
            resolve(newUser);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  } 



  registerUser(username, password)
  .then(user => {

    console.log('Registration successful:', user);
    registro = 'Registro'
    usuario = user.username
    flalogin = true;
    localStorage.setItem('flaglogin','true');
    RegistroValidado(registro)
  })
  .catch(error => {
    alert('Registration error:', error);
  }); 

})


async function RegistroValidado(registro) {
      Swal.fire({
      title: `${registro} Exitoso!`,
      //text: `${user}`,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        
        location.href = "../index.html"
      }});
    }
  

