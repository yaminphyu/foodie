import { MobileToggleProvider } from "@/context/MobileToggleContext";
import "@/styles/globals.css";
import 'react-datepicker/dist/react-datepicker.css';

export default function App({ Component, pageProps }) {
  return (
    <MobileToggleProvider>
      <Component {...pageProps} />
    </MobileToggleProvider>
  )
}
