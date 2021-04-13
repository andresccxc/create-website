import PrincipalProvider from '../context/Context';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <PrincipalProvider>
      <Component {...pageProps} />
    </PrincipalProvider>
  )
};

export default MyApp;
