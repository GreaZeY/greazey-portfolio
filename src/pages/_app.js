import Theme from '../styles/theme';
// import './anim.css'
export default function App({ Component, pageProps }) {
  return (
    <>
            <title>Nikhil Kumar</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 