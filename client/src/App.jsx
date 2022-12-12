import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components';

const App = () => {
  return (
    <div class="min-h-screen">
      <div class="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer /> 
  </div>
  )
}

export default App;
