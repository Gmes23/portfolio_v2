import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Partials 
import Nav from './components/Partials/Nav'
import Searchbar from './components/Partials/Searchbar'

// this is the store carts, this might later be moved to Partials
import StoreCart from './components/StoreCart/StoreCart'

// Admin
import Admin from './components/Admin/Admin'

// User Profile Page, All features for an Authenticated User, Purchased History, Authenticated User Cart
import UserProfilePage from './components/UserPage/UserProfilePage'

// Auth
import Auth from './components/Auth'
import LoginForm from './components/Auth/LoginForm'
import RegisterForm from './components/Auth/RegisterForm'

// Components
import Home from './components/Home'

// Actions 
import { verifyUser } from './actions/auth'

// 404 page 
import NotFound from './components/NotFound/NotFound'
import AboutContainer from './components/About/About'
import ContactContainer from './components/Contact/Contact'

//  Project Imports
import ProjectOne from './components/Projects/ProjectOne'
import ProjectTwo from './components/Projects/ProjectTwo'
import ProjectThree from './components/Projects/ProjectThree'
import ProjectFour from './components/Projects/ProjectFour'
import ProjectFive from './components/Projects/ProjectFive'
import ProjectSix from './components/Projects/ProjectSix'
import GridDisplay from './components/Grid/Grid'
import Showcase from './components/FullSlider/Showcase'
import MagicCursor from './components/MagicCursor/MagicCursor'
import Loader from './components/Loader/Loader'



class App extends Component {
  componentDidMount() {
    this.props.verifyUser()
  }

  render() {
    const {
      auth: {
        isAuth
      }
    } = this.props

    return (
      <div className="App">
        {/* <div>
          <Nav isAuth={isAuth} />
          <Searchbar />
          <StoreCart />
        </div> */}
<body class="hidden hidden-ball">

        <main>
          {/*  ------- LOADING ANIMATIONS FOR ALL PAGES --------- */}
          <Loader />

          <Route exact path="/" component={Home} />
          
          {/*  ------- FOR ADMIN LOG IN ------------ */}
          <Route exact path="/register" render={() => (
            <Auth isAuth={isAuth}>
              <RegisterForm />
            </Auth>
          )} />
          <Route exact path="/login" render={() => (
            <Auth isAuth={isAuth}>
              <LoginForm />
            </Auth>
          )} />

          <Route exact path="/admin" component={Admin} />

          <Route exact path="/about" component={AboutContainer} />

          <Route exact path="/contact" component={ContactContainer} />

          <Route exact path="/User" component={UserProfilePage} />

          {/*  ---------- Grid Display ---------- */}
          <Route exact path="/Grid" component={GridDisplay} />

          {/*  -------------- Showcase -------------------- */}
          <Route exact path="/Showcase" component={Showcase} />


          {/* ----------- Project Routes ------------------ */}
          <Route exact path="/ProjectOne" component={ProjectOne} />
          <Route exact path="/ProjectTwo" component={ProjectTwo} />
          <Route exact path="/project03.html" component={ProjectThree} />
          <Route exact path="/ProjectFour" component={ProjectFour} />
          <Route exact path="/ProjectFive" component={ProjectFive} />
          <Route exact path="/ProjectSix" component={ProjectSix} />

          {/* -------- 404 pages  ---------- */}
          {/* <Route component={NotFound} /> */}
            <div id="app"></div>
          

        </main>
        <MagicCursor />
        </body>
       </div> 
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  verifyUser: () => dispatch(verifyUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
