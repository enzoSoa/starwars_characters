import { Tab, Tabs } from "react-bootstrap";
import { TabCharacters } from "./Tabs.characters";
import { TabRatings } from "./Tabs.ratings";

export const TabsComponent = () => <Tabs defaultActiveKey="characters">
    <Tab eventKey="characters" title="Characters">
        <TabCharacters />
    </Tab>
    <Tab eventKey="ratings" title="Ratings">
        <TabRatings />
    </Tab>
</Tabs>