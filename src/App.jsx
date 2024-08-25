import { useState } from 'react'
import './App.css'
import TabView from './components/tabview/tabview.jsx'
import Recomment from './components/recomment/recomment.jsx'
function App() {
  return (
    <>
      <div className='container'>
        <img className='logo' src="src\assets\logo.png" />
        <TabView />

        <div className='right-bar'>
          <div className='user-container'>
            <div className='profile-username'>
              <img className='profile' src="src\assets\profile.png" />
              <div className='username'>Wannapoern</div>
            </div>
            <div>
              <img className='noti' src="src\assets\noti.png" />
              <img className='noti' src="src\assets\noti.png" />
            </div>
          </div>
          <Recomment />
        </div>

      </div>


    </>
  )
}

export default App
