import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SignUpPage extends Component {
  render() {
    return (
      <main>
        <div class="wrapper">
          <section class="login">
            <h2>Реєстрація</h2>
            <form method="POST">
              <input type="text" placeholder="Email" required />
              <input type="text" placeholder="Ім'я" required />
              <input type="password" placeholder="Пароль" required />
              <input type="password" placeholder="Повторіть пароль" required />
              <div class="buttons">
                <span type="submit">
                  <Link to="/login">Вже маєте акаунт?</Link>
                </span>
                <button class="sumbit" type="submit">
                  Зареєструватися
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    );
  }
}

export default SignUpPage;
