import { MainContainer } from "styles/App.styled";
import { Route, Switch } from "react-router";
import Navigation from "components/Navigation/Navigation";
import { Suspense, lazy } from "react";
import { StyledLoader } from "styles/App.styled";

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
            <Route path="/" exact>
              <ContactsPage />
            </Route>
            <Route path="/register" exact>
              <RegisterPage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
          </Switch>
        </Suspense>
      </MainContainer>
    </>
  );
}

export default App;
