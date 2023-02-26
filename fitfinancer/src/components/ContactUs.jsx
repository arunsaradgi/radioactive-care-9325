import Navbar from "./navbar";
import Footer from "./Footer";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <h1>CONTACT US</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "100%",
            height: "150px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <img
            style={{ margin: "auto" }}
            src="https://www.ia.ooo/wp-content/uploads/2021/02/mail-icon-round-blue-1.svg"
            alt="mail"
          />
          <h1>Investor Relation</h1>
          <link rel="stylesheet" href="ir@ia.ooo" />
          <h1>ir@ia.ooo</h1>
        </div>
        <div
          style={{
            margin: "auto",
            width: "100%",
            height: "150px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <img
            style={{ margin: "auto" }}
            src="https://www.ia.ooo/wp-content/uploads/2021/02/mail-icon-round-blue-1.svg"
            alt="mail"
          />
          <h1>Investor Relation</h1>
          <link rel="stylesheet" href="ir@ia.ooo" />
          <h1>ir@ia.ooo</h1>
        </div>
        <div
          style={{
            margin: "auto",
            width: "100%",
            height: "150px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <img
            style={{ margin: "auto" }}
            src="https://www.ia.ooo/wp-content/uploads/2021/02/mail-icon-round-blue-1.svg"
            alt="mail"
          />
          <h1>Investor Relation</h1>
          <link rel="stylesheet" href="ir@ia.ooo" />
          <h1>ir@ia.ooo</h1>
        </div>
      </div>
     <Footer/>
    </div>
  );
}
