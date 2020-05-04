import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-and-signup/sign-in-and-sign-up.comonent";
import NavBar from "./components/nav-bar/nav-bar.component";
import CustomFloatButton from "./components/custom-float-button/custom-float-button.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurretUser } from "./redux/user/user.actions";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { setCurretUser } = this.props;

    this.unsubscribeFormAuthv = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurretUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurretUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <CustomFloatButton/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" push/>
              ) : (
                <SignInAndSignUpPage />
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurretUser: user => dispatch(setCurretUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
