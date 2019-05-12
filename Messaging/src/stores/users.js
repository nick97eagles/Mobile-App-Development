/*
 * 3. src/stores/users.js
 */

import {observable, computed, map, toJS, action} from 'mobx';

class Users {
  @observable id = null;
  @observable isLoggedIn = false;
  @observable name = null;
  @observable avatar = null;
  @observable loggingIn = false;
  @observable registering = false;
  @observable loggingError = null;
  @observable registeringError = null;

@action login = function(email, password) {
  this.loggingIn = true;
  this.loggingError = null;
  setTimeout(() => {
    if (password.endsWith('x')) {
      this.loggingError = 'Invaid email/password!';  
    } else {
      this.isLoggedIn = true;
      this.name = email;    
    }
    this.loggingIn = false;
  }, 1500);
}

  @action logout = function() {
    this.isLoggedIn = false;
    this.name = null;
  }

  @action register = function(email, password, name) {
    if(!name || name == '') {
      this.registering = false;
      this.registeringError = 'Name was not entered';
      return;
    }
    this.registering = true;
    this.registeringError = null;
    setTimeout(() => {
      if (password.endsWith('x')) {
        this.registeringError = 'Registration failed!';
      } else {
        this.isLoggedIn = true;
        this.name = name;
      }
      this.registering = false;
    }, 1500);
  }

  searchUsers(name) {
    console.log(name);
    return new Promise(function(resolve) {
      // TODO
    });
  }
}

export default new Users();