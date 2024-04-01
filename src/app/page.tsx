import Image from "next/image";
import PageHeader from "./components/PageHeader";
import GlobalHeader from "./components/GlobalHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-2">
      <GlobalHeader/>
      <PageHeader/>
    </main>
  );
}
