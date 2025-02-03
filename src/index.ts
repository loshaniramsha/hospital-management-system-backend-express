import express from 'express';
import DoctorRoute from "../route/DoctorRoute";
import PregnentMotherRoute from "../route/PregnentMotherRoute";
import ChildRoute from "../route/ChildRoute";
import MedicineRoute from "../route/MedicineRoute";
import VaccineRoute from "../route/VaccineRoute";
import VaccineManageChildRoute from "../route/VaccineManageChildRoute";
import VaccineManageMomRoute from "../route/VaccineManageMomRoute";
import StaffRoute from "../route/StaffRoute";
import AuthRoute from "../route/AuthRoute";


const app = express();
app.use(express.json());
app.use("/doctor", DoctorRoute);
app.use("/mother",PregnentMotherRoute)
app.use("/child",ChildRoute)
app.use("/medicine",MedicineRoute)
app.use("/vaccine",VaccineRoute)
app.use("/vaccineManageChild",VaccineManageChildRoute)
app.use("/vaccineManageMom",VaccineManageMomRoute)
app.use("/staff",StaffRoute)
app.use("/auth",AuthRoute)

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});