import {openDatabase} from 'react-native-sqlite-storage';
import {format} from 'date-fns';

var db = openDatabase({name: 'UserDatabase.db'});

function createTable() {
  db.transaction(function (txn) {
    txn.executeSql(
      `
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        nama TEXT,
        username TEXT,
        level TEXT,
        telepon TEXT,
        tanggal DATE
    );`,
      [],
    );
  });
}

function insertUsers(id, nama, username, level, telepon) {
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO users (id, nama, username, level, telepon, tanggal) VALUES (?,?,?,?,?,?)',
      [id, nama, username, level, telepon, format(new Date(), 'dd-MM-yyyy')],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
      },
    );
  });
}

function deleteUsers() {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM users', [], (tx, results) => {
      console.log('Results', results.rowsAffected);
    });
  });
}

function selectUsers(callback) {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM users', [], (tx, results) => {
      var temp = [];
      for (let i = 0; i < results.rows.length; ++i)
        temp.push(results.rows.item(i));
      callback(temp);
    });
  });
}

export {createTable, insertUsers, deleteUsers, selectUsers};
