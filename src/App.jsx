import Navbar from "./components/navbar";
import ResponsiveDivs from "./pages/home/ResponsiveDivs";
import Email from "./pages/home/email";
import Hero from "./pages/home/hero";
function App() {
  return (
    <main className='monts min-h-screen text-white bg-main pb-5'>
      <Navbar />
      <Hero/>
      <Email/>
      <ResponsiveDivs />
    </main>
  );
}

export default App;
