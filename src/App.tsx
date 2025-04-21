import ForgetPasswordPage from "./components/authComponents/ForgetPassword/ForgetPasswordPage";
import LoginPage from "./pages/LoginPage";
import Checkemail from "./components/authComponents/checkemail/Checkemail";

import CreateNewPassword from "./components/authComponents/createnewpassword/CreateNewPassword";

import RegisterPage from "./pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import VerifyAccount from "./components/authComponents/verifyaccount/VerifyAccount";
import EmailOtpVerification from "./components/authComponents/otpverification/EmailOtpVerification";
import PhoneOtpVerification from "./components/authComponents/otpverification/PhoneOtpVerification";
import HomeForm from "./pages/HomeForm";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DeliveryInformationPage from "./pages/DeliveryInformationPage";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFoundPage";
import UserInfo from "./pages/UserInfo";
import Layout from "./Layout";
import OnlineProducts from "./pages/OnlineProducts";
import OfflineProducts from "./pages/OfflineProducts";


const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/emailverification" element={<EmailOtpVerification />} />
        <Route path="/phoneverification" element={<PhoneOtpVerification />} />
        <Route path="/changeverificationmode" element={<VerifyAccount />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/checkemail" element={<Checkemail />} />
        <Route path="/form" element={<HomeForm />} />
        <Route element={<Layout />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/listpage" element={<ListPage />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/online-products/:id" element={<OnlineProducts />} />
          <Route path="/offline-products/:id" element={<OfflineProducts />} />

          <Route path="/delivery" element={<DeliveryInformationPage />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
