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
import Buttons from "./components/Buttons";
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
      <ButtonGroup/>
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
