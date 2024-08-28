// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <Navbar />
          <div className={isDarkTheme ? 'dho-con' : 'lho-con'}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="ha"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="ha"
              />
            )}
            <h1 className={isDarkTheme ? 'dheading' : 'heading'}> Home </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
