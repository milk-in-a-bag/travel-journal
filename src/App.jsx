import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const destinations = data.map((destination) => {
    return (
      <Entry
        img={destination.img.src}
        alt={destination.img.alt}
        title={destination.title}
        country={destination.country}
        maps={destination.googleMapsLink}
        dates={destination.dates}
        text={destination.text}
      />
    );
  });

  return (
    <>
      <Header />
      {destinations}
    </>
  );
}
