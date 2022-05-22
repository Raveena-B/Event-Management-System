import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Income/Event/Home";

import AddEvent from "./Components/Income/Event/AddEvents";
import DisplayEvent from "./Components/Income/Event/Displayevent";
import EditEvent from "./Components/Income/Event/Editevent";

import AddDelivery from "./Components/Income/Delivery/AddDelivery";
import DisplayDelivery from "./Components/Income/Delivery/DisplayDelivery";
import EditDelivery from "./Components/Income/Delivery/EditDelivery";

import AddAppointment from "./Components/Income/Appointment/AddAppointment";
import DisplayAppointment from "./Components/Income/Appointment/DisplayAppointment";
import EditAppointment from "./Components/Income/Appointment/EditAppointment";

import AddAdvertisement from "./Components/Income/Advertisement/AddAdvertisement";
import DisplayAdvertisement from "./Components/Income/Advertisement/DisplayAdvertisement";
import EditAdvertisement from "./Components/Income/Advertisement/EditAdvertisement";

import AddSalary from "./Components/Expenditure/Salary/AddSalary";
import DisplaySalary from "./Components/Expenditure/Salary/DisplaySalary";

import AddInventory from "./Components/Expenditure/Inventory/AddInventory";
import DisplayInventory from "./Components/Expenditure/Inventory/DisplayInventory";

import AddOther from "./Components/Expenditure/Other/AddOther";
import DisplayOther from "./Components/Expenditure/Other/DisplayOther";

import AddPaymentDetails from "./Components/Expenditure/Common/AddPaymentDetails";

import ReportGenerator from "./Components/Expenditure/Salary/reportGenerator";
import List from "./Components/Expenditure/Salary/List";

function App() {
  return (
    <Router>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/displayevent" element={<DisplayEvent />} />
            <Route path="/editevent/:id" element={<EditEvent />} />

            <Route path="/adddelivery" element={<AddDelivery />} />
            <Route path="/displaydelivery" element={<DisplayDelivery />} />
            <Route path="/editdelivery/:id" element={<EditDelivery />} />

            <Route path="/addappointment" element={<AddAppointment />} />
            <Route
              path="/displayappointment"
              element={<DisplayAppointment />}
            />
            <Route path="/editappointment/:id" element={<EditAppointment />} />

            <Route path="/addadvertisement" element={<AddAdvertisement />} />
            <Route
              path="/displayadvertisement"
              element={<DisplayAdvertisement />}
            />
            <Route
              path="/editadvertisement/:id"
              element={<EditAdvertisement />}
            />

            <Route path="/addsalary" element={<AddSalary />} />
            <Route path="/displaysalary" element={<DisplaySalary />} />

            <Route path="/addinventory" element={<AddInventory />} />
            <Route path="/displayinventory" element={<DisplayInventory />} />

            <Route path="/addother" element={<AddOther />} />
            <Route path="/displayother" element={<DisplayOther />} />

            <Route path="/addpaymentdetails" element={<AddPaymentDetails />} />

            <Route path="/reportgenerator" element={<ReportGenerator />} />
            <Route path="/salarylist" element={<List />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
