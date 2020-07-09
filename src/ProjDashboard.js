import React from "react";
import Example from './components/usergrid';
import Upload from './components/upload';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class ProjDashboard extends React.Component
{
    render(){
    return(
      <table Style="width:80%;margin-left:50px;border:1px solid #aaa;border-radius:15px 15px 15px 15px">
      
      <Tabs>
        <TabList>
          <Tab>Document Builder</Tab>
          <Tab>Documents</Tab>
          <Tab>Literature Review</Tab>
          </TabList>
          <TabPanel><Example/></TabPanel>
          <TabPanel><Upload/></TabPanel>
          <TabPanel><p>fwfgwgajgffyjawegfuj</p></TabPanel>
          </Tabs>
         
          </table>
    );
}
}

export default ProjDashboard;