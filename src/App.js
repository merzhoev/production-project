// import { LoginPage } from "pages/login-page";
import { ProfilePage } from "pages/profile-page";
import { Footer } from "components/footer";


import { Header } from "components/header";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <LoginPage/> */}
      <ProfilePage/>
      <Footer/>
    </div>
  );
}

export default App;
