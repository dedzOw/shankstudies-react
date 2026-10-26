import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/homes/Home";
import Units from "./pages/units/Units";
import MissedClass from "./pages/missed-class/MissedClass";
import StudyTools from "./pages/study-tools/StudyTools";
import ParentPortal from "./pages/parent-portal/ParentPortal";
import Standards from "./pages/standards/Standards";
import StudentWork from "./pages/student-work/StudentWork";
import ScheduleMeeting from "./pages/schedule-meeting/ScheduleMeeting";
import Contact from "./pages/contact/Contact";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="units" element={<Units />} />
                    <Route path="missed-class" element={<MissedClass />} />
                    <Route path="study-tools" element={<StudyTools />} />
                    <Route path="parent-portal" element={<ParentPortal />} />
                    <Route path="standards" element={<Standards />} />
                    <Route path="student-work" element={<StudentWork />} />
                    <Route path="schedule-meeting" element={<ScheduleMeeting />} />
                    <Route path="contact" element={<Contact />} />

                    <Route
                        path="*"
                        element={
                            <section className="page-banner">
                                <h2>Page Not Found</h2>
                                <p>Choose a page from the navigation above.</p>
                            </section>
                        }
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;