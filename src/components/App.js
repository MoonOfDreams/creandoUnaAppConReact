import ContentWrapper from './ContentWrapper';
import SideBar from './SideBar';
import './app.css';

function App() {
  return (
    <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <SideBar />
      {/* 	<!-- End of Sidebar --> */}

      {/* 		<!-- Content Wrapper --> */}
      <ContentWrapper />
      {/* <!-- End of Content Wrapper --> */}

    </div>
  );
}

export default App;
