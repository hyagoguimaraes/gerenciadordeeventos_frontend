import { AppRoutes } from "../src/routes";
import { AuthProvider } from "./context/AuthContext";
import { EventModalProvider } from "./context/EventModalContext";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AuthProvider>
        <EventModalProvider>
          <AppRoutes />
        </EventModalProvider>
      </AuthProvider>
    </>
  )
}