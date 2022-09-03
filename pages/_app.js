import '../styles/globals.css';
import { CourierProvider } from '@trycourier/react-provider';
import { Toast } from '@trycourier/react-toast';

function MyApp({ Component, pageProps }) {
  const CLIENT_KEY = process.env.COURIER_CLIENT_KEY;
  return (
    <CourierProvider clientKey={CLIENT_KEY} userId={'test'}>
      <Toast />
      <Component {...pageProps} />
    </CourierProvider>
  );
}

export default MyApp;
