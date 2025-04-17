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
import AmazonPage from "./pages/AmazonPage";
import ListPage from "./pages/ListPage";
import KfcPage from "./pages/KfcPage";
import DeliveryInformationPage from "./pages/DeliveryInformationPage";
import { ToastContainer } from "react-toastify";
// import Carousel from "./components/shared/Carousel";
// import HorizontalRuler from "./components/shared/HorizontalRuler";
// import Navbar from "./components/shared/Navbar";
// import OfferSection from "./components/shared/OfferSection";
const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/emailverification" element={<EmailOtpVerification />} />
        <Route path="/phoneverification" element={<PhoneOtpVerification />} />
        <Route path="/changeverificationmode" element={<VerifyAccount />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/checkemail" element={<Checkemail />} />
        <Route path="/form" element={<HomeForm />} />
        <Route path="/amazon" element={<AmazonPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/kfc" element={<KfcPage />} />
        <Route path="/delivery" element={<DeliveryInformationPage />} />
      </Routes>
    </>
  );
};

export default App;
