import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div>
            <Navbar />

            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="ha"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="ha"
              />
            )}
            <h1 className={isDarkTheme ? 'dheading' : 'heading'}>About </h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default About
