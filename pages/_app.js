import "@/styles/global.scss";
import App from "next/app";
import store from "@/redux/store";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
