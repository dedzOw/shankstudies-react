import "./Units.css";
import PageBanner from "../../components/page-banner/PageBanner";
import UnitDetail from "../../components/unit-detail/UnitDetail";
import units from "../../units";


const Units = () => {
    return (
        <main id="units" className="page">
            <PageBanner heading="FULL CURRICULUM" title="Course Units" description="Use this page to review the topics taught in each unit. Assignments and class materials are posted in Google Classroom." />
            <section className="page-section">
                <div className="content-width">{units.map((unit) => <UnitDetail key={unit.id} unit={unit} />)}</div>
            </section>
        </main>
    );
};

export default Units;
