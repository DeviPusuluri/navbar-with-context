// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className={isDarkTheme ? 'dho-con' : 'lho-con'}>
            <Navbar />
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="ha"
            />
            <h1 className={isDarkTheme ? 'dheading' : 'heading'}>
              Lost Your Way
            </h1>
            <p className={isDarkTheme ? 'dheading' : 'heading'}>
              We cannot seem to find the page
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
