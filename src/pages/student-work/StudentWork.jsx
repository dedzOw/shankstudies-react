import PortalPage from "../../components/portal-page/PortalPage";
import { StudentWorkCard } from "../../components/cards/Cards";


const StudentWork = () => {
    return (
        <PortalPage>
            <h2 className="portal-page-title">Student Work Examples</h2><p className="portal-page-intro">Examples of excellent pieces of student work.</p><section className="student-work-grid">
                <StudentWorkCard unit="UNIT 1" />
                <StudentWorkCard unit="UNIT 1" />
                <StudentWorkCard unit="UNIT 2" />
            </section>
        </PortalPage>
    );
};

export default StudentWork;
