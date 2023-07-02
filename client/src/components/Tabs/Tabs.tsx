import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import './Tabs.css';
import _ from 'lodash';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TabsComp = ({ tab, setTab, tabsLength, addTab }: { tab: number, setTab: (num: number) => void, tabsLength: number, addTab: () => void }) => {

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <div className="tabs">
            כמוסות
            <div className='tabs-container'>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {
                        _.range(tabsLength).map(tab => <Tab label={`כמוסה ${tab + 1}`} />)
                    }
                </Tabs>
                <AddCircleOutlineIcon onClick={addTab} />
            </div>
        </div>
    );
}

export default TabsComp;
