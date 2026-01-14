import { AppRoutes } from "../src/routes";
import { AuthProvider } from "./Context/AuthContext";
import { EventModalProvider } from "./context/EventModalContext";

export default function App() {
  return (
    <AuthProvider>
      <EventModalProvider>
        <AppRoutes />
      </EventModalProvider>
    </AuthProvider>
  )
}