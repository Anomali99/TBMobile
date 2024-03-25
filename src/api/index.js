const IPServer = '192.168.68.219';
const PORTServer = '5127';

function login(username, password, callback) {
  fetch(`http://${IPServer}:${PORTServer}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function register(username, password, nama, telepon, callback) {
  fetch(`http://${IPServer}:${PORTServer}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
      nama: nama,
      telepon: telepon,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function getAllBuku(callback) {
  fetch(`http://${IPServer}:${PORTServer}/buku`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function getBuku(key, callback) {
  fetch(`http://${IPServer}:${PORTServer}/buku/cari/${key}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function getDetailBuku(id, callback) {
  fetch('http://192.168.68.219:5127/buku/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export {login, register, getAllBuku, getBuku, getDetailBuku};
