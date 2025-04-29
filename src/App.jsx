import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const destinations = data.map((destination) => {
    return <Entry key={destination.id} {...destination} />;
  });

  return (
    <>
      <Header />
      {destinations}
    </>
  );
}
