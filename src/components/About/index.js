import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeColor = isDarkTheme ? 'page-theme-dark' : 'page-theme-light'
      const pageImg = isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/about-dark-img.png`
        : `https://assets.ccbp.in/frontend/react-js/about-light-img.png`
      const textColor = isDarkTheme ? `text-dark` : `text-light`

      return (
        <div className={themeColor}>
          <Navbar />
          <div className="page-container">
            <img src={pageImg} alt="about" className="page-images" />
            <h1 className={textColor}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
