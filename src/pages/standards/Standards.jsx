import PortalPage from "../../components/portal-page/PortalPage";
import { StandardCard } from "../../components/cards/Cards";


const Standards = () => {
    return (
        <PortalPage>
            <h2 className="portal-page-title">DoDEA Social Studies Standards</h2><p className="portal-page-intro">This course aligns with DoDEA Social Studies standards for Grade 7. These are the main areas students use throughout the year.</p><section className="standards-list">
                <StandardCard number="1" title="History of the United States" description="Students study major ideas, events, developments, and turning points in United States history." />
                <StandardCard number="2" title="History of the World" description="Students use world-history context and multiple perspectives to better understand historical events." />
                <StandardCard number="3" title="Geography" description="Students examine how people, places, environments, and resources affect historical development." />
                <StandardCard number="4" title="Economics" description="Students explore how economic choices and systems influence people and societies." />
                <StandardCard number="5" title="Civics, Citizenship & Government" description="Students learn about constitutional democracy, rights, responsibilities, and government." />
                <StandardCard number="7.1" title="Native Americans" description="Students examine early settlements, cultural regions, and the diversity of Native American societies." />
                <StandardCard number="7.2" title="Colonial Developments" description="Students study European exploration, colonization, and the development of colonial America." />
                <StandardCard number="7.3" title="American Independence" description="Students investigate the tensions that led to the American Revolution and a new nation." />
            </section><a className="standards-button" href="https://dedzow.github.io/csce242/projects/part6/resources/ccrs_social_studies_grades_6-8_2025-1.pdf" target="_blank" rel="noreferrer">Open the Full DoDEA Social Studies Framework to learn more→</a>
        </PortalPage>
    );
};

export default Standards;
