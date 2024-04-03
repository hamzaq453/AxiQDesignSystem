import PageHeader from "./components/PageHeader";
import GlobalHeader from "./components/GlobalHeader";
import TopNavbar from "./components/TopNavbar";
import ListScreen from "./components/ListScreen";
import DataTable from "./components/DataTable";
import FormElementStacked from "./components/FormElementStacked";
import FormLabel from "./components/FormLabel";
import Layout from "./components/Layout";
import Card from "./components/Card";
import Modals from "./components/Modals";
import Spinner from "./components/Spinner";
import RadioButtonGroup from "./components/RadioButtonGroup";
import Buttons from "./components/Buttons2";
import Checkbox from "./components/Checkbox";
import ButtonGroup from "./components/ButtonGroup";
import ButtonIcons from "./components/ButtonIcons";
import ComboBox from "./components/ComboBox";
import RadioGroup from "./components/RadioGroup";
import FileSelector from "./components/FileSelector";
import Files from "./components/Files";
import PanelHeader from "./components/Panels";
import Path from "./components/Path";
import SummaryDetail from "./components/SummaryDetail";
import TabsComponent from "./components/Tabs";
import TextArea from "./components/TextArea";
import Toast from "./components/Toast";
import AlignmentUtility from "./components/utilities/Alignment";
import BorderUtility from "./components/utilities/Border";
import Box from "./components/utilities/Box";
import Grid from "./components/utilities/Grid";
import Margin from "./components/utilities/Margin";
import Padding from "./components/utilities/Padding";
import Print from "./components/utilities/Print";
import SizingUtility from "./components/utilities/Sizing";
import TruncationUtility from "./components/utilities/Truncation";
import VisibilityUtilities from "./components/utilities/Visibility";
import ButtonGroup2 from "./components/ButtonGroup2";
import PageHeader2 from "./components/PageHeader2";
import Button from "./components/Buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-2">
      <GlobalHeader/>
      <TopNavbar/>
      <PageHeader/>
      <ListScreen/>
      <DataTable/>
      <FormLabel/>
      <FormElementStacked/>
      <Layout/>
      <Card/>
      <Spinner/>
    {/* <Modals/> */}
      <RadioButtonGroup/>
      <Buttons/>
      <ButtonGroup2/>
    
      <div className="bg-black text-white">
        <h2 className="text-xl font-semibold">Checkbox Button Group</h2>
        <ButtonGroup variant="checkbox" labels={{ label: 'Select Options' }}>
          <input type="checkbox" className="form-checkbox h-5 w-5 " /><span className="ml-2 text-gray-700">Option 1</span>
          <input type="checkbox" className="form-checkbox h-5 w-5 " /><span className="ml-2 text-gray-700">Option 2</span>
        </ButtonGroup>
      </div>
      <ButtonGroup className="bg-white text-black " variant="list" labels={{ label: 'List of Actions', error: 'Please select at least one option.' }}>
          {/* Default Button */}
      <Button >
        Default Button
      </Button>

      {/* Button with Icon on the Left */}
      <Button
        iconName="settings"
        iconPosition="left"
        variant="brand"
      >
        Settings
      </Button>

      {/* Responsive Button */}
      <Button
        responsive={true}
        variant="destructive"
        iconSize="large"
      >
        Responsive Button
      </Button>

      {/* Button with Assistive Text for Accessibility */}
      <Button
        iconName="info"
        iconSize="large"
        assistiveText="More information"
      >
        <span className="sr-only">More Information</span>
      </Button>

        </ButtonGroup>

      
      <ButtonIcons/>
      <Checkbox/>
      <ComboBox/>
      <RadioGroup/>
      <FileSelector/>
      <Files/>
      <PanelHeader/>

      

      <Path/>
      <SummaryDetail/>
      <TabsComponent/>
      <TextArea/>
      <Toast/>
      {/* Utilities */}
      <AlignmentUtility/>
      <BorderUtility/>
      <Box/>
      <Grid/>
      <Margin/>
      <Padding/>
      <Print/>
      <SizingUtility/>
      <TruncationUtility/>
      <VisibilityUtilities/>


    </main>
  );
}
