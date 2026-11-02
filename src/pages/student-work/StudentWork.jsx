import PortalPage from "../../components/portal-page/PortalPage";
import Slideshow from "../../components/slideshow/Slideshow";

const StudentWork = () => {
    return (
        <PortalPage>
            <h2 className="portal-page-title">Student Work Examples</h2>

            <p className="portal-page-intro">
                Explore examples of excellent student work using the arrows below.
            </p>
            <Slideshow />
        </PortalPage>
    );
};

export default StudentWork;