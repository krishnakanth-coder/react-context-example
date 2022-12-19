import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeColor = isDarkTheme ? 'page-theme-dark' : 'page-theme-light'
      const pageImg = isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/home-dark-img.png`
        : `https://assets.ccbp.in/frontend/react-js/home-light-img.png`
      const textColor = isDarkTheme ? `text-dark` : `text-light`
      return (
        <div className={themeColor}>
          <Navbar />
          <div className="page-container">
            <img src={pageImg} alt="Home" className="page-images" />
            <h1 className={textColor}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
