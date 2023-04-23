import { AuthContextProvider } from "@/context";
import ProtectedRoute from "@/helper/ProtectedRoute";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const ProtectedPages = ProtectedRoute(Component);
  return (
    <AuthContextProvider>
      <ProtectedPages {...pageProps} />
    </AuthContextProvider>
  );
}
