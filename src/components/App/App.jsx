import { MainContainer } from "styles/App.styled";
import { Switch } from "react-router";
import Navigation from "components/Navigation/Navigation";
import { Suspense, lazy } from "react";
import { StyledLoader } from "styles/App.styled";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ToastContainer } from "react-toastify";

const ContactsPage = lazy(() => import("views/ContactsPage"));
const RegisterPage = lazy(() => import("views/RegisterPage"));
const LoginPage = lazy(() => import("views/LoginPage"));

function App() {
  return (
    <>
      <Navigation />
      <MainContainer>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={1}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
