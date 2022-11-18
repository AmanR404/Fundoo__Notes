import React from 'react'
import './Header.css'


function Header(props) {

  return (
    <div>
        <nav className='navigation'>
          <span onClick={props.toggler} class="material-symbols-outlined menu hover">
              menu
          </span>
              <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="Keep image" />
              <span id='keep'>{props.text}</span>
              <form>
                <input type="search" placeholder='Search' className='mySearch' />
              </form>
              <span class="material-symbols-outlined sideicons hover">
                  refresh
              </span>
              <span class="material-symbols-outlined sideicons hover">
                  sort
              </span>
              <span class="material-symbols-outlined sideicons hover">
                  settings
              </span>
              <span class="material-symbols-outlined sideicons hover">
                    apps
              </span>
              <span class="material-symbols-outlined sideicons hover">
                    login
              </span>
        </nav>
        <hr/>
    </div>
  )
}
Header.defaultProps = {
  text: "Keep"
}

export default Header