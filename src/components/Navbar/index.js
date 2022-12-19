import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      console.log(isDarkTheme)
      const onChangeTheme = () => {
        toggleTheme()
      }
      const textColor = isDarkTheme ? `text-dark` : `text-light`
      const butImage = !isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/dark-theme-img.png`
        : `https://assets.ccbp.in/frontend/react-js/light-theme-img.png`
      return (
        <nav className="nav-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="nav-logo-image"
          />
          <ul className="header-list">
            <Link to="/" className="link-item">
              <li className={textColor}>Home</li>
            </Link>
            <Link to="/about" className="link-item">
              <li className={textColor}>About</li>
            </Link>
          </ul>
          <button type="button" testid="theme" onClick={onChangeTheme}>
            <img src={butImage} alt="light theme" className="nav-logo-image" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
