// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme(isDarkTheme)
      }

      return (
        <div className={isDarkTheme ? 'dnav-con' : 'nav-container'}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="logo"
            />
          )}
          <ul className="hc">
            <li className={isDarkTheme ? 'dheading' : 'heading'}>
              <Link to="/">Home</Link>
            </li>
            <li className={isDarkTheme ? 'dheading' : 'heading'}>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="btn"
            onClick={onClickTheme}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="logo"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
