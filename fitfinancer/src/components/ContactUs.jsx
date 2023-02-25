import Navbar from "./navbar";
import { AspectRatioBox } from "@chakra-ui/core";

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
      <div>
        <AspectRatioBox ratio={16 / 9}>
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            alt="demo"
          />
        </AspectRatioBox>
      </div>
    </div>
  );
}
