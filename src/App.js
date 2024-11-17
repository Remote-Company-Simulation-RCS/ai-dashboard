import "./App.css";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Navbar from "./components/Navbar.jsx";
import SidebarChat from "./components/SidebarChat.jsx";
import Chat from "./components/Chat.jsx";

function App() {
  return (
    < >
    <Navbar />
    <div className="d-flex">
      <SidebarChat />
      <Chat />
    </div>
    </>
  );
}

export default App;
