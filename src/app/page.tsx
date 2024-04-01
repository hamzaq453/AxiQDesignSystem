import Image from "next/image";
import PageHeader from "./components/PageHeader";
import GlobalHeader from "./components/GlobalHeader";
import TopNavbar from "./components/TopNavbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-2">
      <GlobalHeader/>
      <TopNavbar/>
      <PageHeader/>
    </main>
  );
}
