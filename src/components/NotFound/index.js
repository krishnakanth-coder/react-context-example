import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeColor = isDarkTheme ? 'page-theme-dark' : 'page-theme-light'
      const textColor = isDarkTheme ? `text-dark` : `text-light`
      return (
        <div className={themeColor}>
          <Navbar />
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="page-images"
          />
          <div className={textColor}>
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
