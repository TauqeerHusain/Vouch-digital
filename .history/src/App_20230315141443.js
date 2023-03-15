import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrProfile from "./Components/CreateProfile";
import LoginAct from "./Components/LoginAct/index";
import ModulesSetup from "./Components/Modules/Module";
import Page404 from "./Components/Page/index";
import Payment from "./Components/PaymentSetup/index";
import Success from "./Components/Success/index";
import Theme from "./Components/Themes/index";
import VeiwClint from "./Components/ViewClients/index";

const App = () => {
  const [Token, SetToken] = useState(true);
  useEffect(() => {
    const GetToken = localStorage.getItem("token");
    if (GetToken !== "") {
      SetToken(true);
    } else {
      SetToken(false);
    }
  });
  return (
    <>
      <div className="containers">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginAct />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/View_Clients" element={<VeiwClint />} />
            <Route path="/Create_Profile" element={<CrProfile />} />
            <Route path="/Payment_Setup" element={<Payment />} />
            <Route path="/Theme_Setup" element={<Theme />} />
            <Route path="/Modules_Setup" element={<ModulesSetup />} />
            <Route path="/Success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
