import React,{lazy} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";


//Layouts
import AppRoute from "./layouts/AppRoute";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import HomeLayout from "./layouts/HomeLayout";

//Pages

const Page1 = lazy(() => import('./tmp/Page1'));
const TreePage = lazy(() => import('./tmp/TreePage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Page2 = lazy(() => import('./tmp/Page2'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const TaskBankPage = lazy(() => import('./pages/TaskBankPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));



const ProviderConfig = () => {
  return (
    <Router>
     
      <AppRoute path="/quiz" layout={MainLayout} component={QuizPage} />
      <AppRoute path="/page1" layout={MainLayout} component={Page1} />
      <AppRoute path="/taskbank"  layout={MainLayout}  component={TaskBankPage} />
      <AppRoute path="/admin"  layout={MainLayout}  component={Page1} />
      <AppRoute exact  path="/login"  layout={AuthLayout}  component={LoginPage} />
      <AppRoute exact  path="/register"  layout={AuthLayout}  component={RegisterPage} />
      <AppRoute exact path="/" layout={HomeLayout} component={HomePage} />
    </Router>
  );
};


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProviderConfig />
      </PersistGate>
    </Provider>
  );
}

export default App;
