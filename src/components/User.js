import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <div><p>Привет, {name}!</p>
        <button className="btn" onClick={this.props.handleLogout}>
          Выйти
        </button>
      </div>
    } else {
      return (
        <div>
          <button className="btn" onClick={this.props.handleLogin}>
            Войти
          </button>
        </div>

      )
    }
  }

  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
}