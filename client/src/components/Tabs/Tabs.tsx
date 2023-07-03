import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import './Tabs.css';
import _ from 'lodash';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TabsComp = ({ tab, setTab, tabs, addTab, deleteTab }: { tab: number, setTab: (num: number) => void, tabs: string[], addTab: () => void, deleteTab: (tab: number) => void }) => {

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
        event.stopPropagation();
    };

    return (
        <div className="tabs">
            כמוסות
            <div className='tabs-container'>
                <Tabs
                    value={tabs.map(t => +t).indexOf(tab)}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {
                        tabs.map((tab, index) => <div onClick={() => deleteTab(+tab)}>
                            {tabs.length > 1 ? "x" : null}
                            <Tab
                                onClick={(e) => handleChange(e, +tab)}
                                key={+tab}
                                label={`כמוסה ${index + 1}`}
                            />
                        </div>)
                    }
                </Tabs>
                <AddCircleOutlineIcon onClick={addTab} />
            </div>
        </div>
    );
}

export default TabsComp;
