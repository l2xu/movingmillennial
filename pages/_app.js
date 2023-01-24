import "@/styles/globals.css";
import Sidebar from "../components/Sidebar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <main>
        <div className="mt-6  ml-24 mr-4 lg:mr-16 lg:ml-32">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
