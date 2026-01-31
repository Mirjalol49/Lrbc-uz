import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Main from "./Pages/Main/Main";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Main />
      <Footer />
    </LanguageProvider>
  );
}

export default App;


