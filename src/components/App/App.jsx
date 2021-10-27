import { MainContainer } from "styles/App.styled";
import { Route, Switch } from "react-router";
import Navigation from "components/Navigation/Navigation";
import { Suspense, lazy } from "react";
import { StyledLoader } from "styles/App.styled";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const ContactsPage = lazy(() => import("views/ContactsPage"));
const RegisterPage = lazy(() => import("views/RegisterPage"));
const LoginPage = lazy(() => import("views/LoginPage"));

function App() {
  return (
    <>
      <Navigation />
      <MainContainer>
        <Suspense fallback={<StyledLoader type="ThreeDots" color="gray" />}>
          <Switch>
            <PrivateRoute path="/" exact redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
            <PublicRoute path="/register" exact redirectTo="/" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" exact redirectTo="/" restricted>
              <LoginPage />
            </PublicRoute>
          </Switch>
        </Suspense>
      </MainContainer>
    </>
  );
}

export default App;
