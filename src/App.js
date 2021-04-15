import React,{lazy} from "react";
import { BrowserRouter as Router} from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";


//Layouts
import AppRoute from "./layouts/AppRoute";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";

//Pages


const HomePage = lazy(() => import('./pages/HomePage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const TaskBankPage = lazy(() => import('./pages/TaskBankPage'));
const CreateTaskPage = lazy(() => import('./pages/CreateTaskPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));



const ProviderConfig = () => {
  return (
    <Router>
     
      <AppRoute path="/quiz" layout={MainLayout} component={QuizPage} />
      <AppRoute path="/taskbank"  layout={MainLayout}  component={TaskBankPage} />
      <AppRoute path="/taskadd"  layout={MainLayout}  component={CreateTaskPage} />
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
