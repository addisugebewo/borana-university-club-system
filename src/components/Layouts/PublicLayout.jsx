import Navbar from "../Navbar/Navbar";


function PublicLayout({ children }) {
  return (
    <>
    <Navbar/>

      <main>{children}</main>
    </>
  );
}

export default PublicLayout;
