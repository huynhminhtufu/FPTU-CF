import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, Link, withRouter } from "react-router-dom";

import { Layout } from "antd";

import HeaderPage from "./modules/header/Header";
import FooterPage from "./modules/footer/Footer";
import Routes from "./Routes";
import NotFound from "./modules/not-found/NotFound";
import Error from "./modules/error/Error";

type Props = {
  location: Location;
};

type State = {
  hasError: boolean;
  errorText: string;
};

type Location = {
  pathname: string;
};

class App extends Component<Props, State> {
  state = {
    hasError: false,
    errorText: "",
  };

  static getDerivedStateFromError(error): State {
    return {
      hasError: true,
      errorText: error.toString(),
    };
  }

  render() {
    const { location } = this.props;
    const { hasError, errorText } = this.state;
    const isRadio = location.pathname === "/radio" ? true : false;

    return (
      <Layout>
        <div
          style={{
            padding: "2rem",
            backgroundColor: isRadio ? "#FAEBCA" : "#000",
            textAlign: "center",
          }}
        >
          {!isRadio && (
            <Link to="/">
              <img
                src="/assets/images/fpt-logo.png"
                alt="FUHCM.com"
                style={{ width: "300px" }}
              />
            </Link>
          )}
          {isRadio && (
            <Link to="/">
              <img
                src="/assets/images/logo-radio.png"
                alt="FUHCM.com"
                style={{ width: "150px" }}
              />
            </Link>
          )}
        </div>
        <HeaderPage />
        {hasError && <Error error={errorText} />}
        {!hasError && (
          <Switch>
            {Routes.map(route => {
              return (
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            })}
            <Route path="*" component={NotFound} />
          </Switch>
        )}
        <FooterPage />
      </Layout>
    );
  }
}

export default withRouter(App);
