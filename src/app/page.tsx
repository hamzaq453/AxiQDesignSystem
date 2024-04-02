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
      {/* <Modals/> */}


    </main>
  );
}
