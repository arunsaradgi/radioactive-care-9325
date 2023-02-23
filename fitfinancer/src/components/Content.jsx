import { Grid, GridItem } from "@chakra-ui/react";

export default function Content() {
  return (
    <div style={{ fontFamily: "sans" }}>
      <div style={{ display: "flex", padding: "60px" }}>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            paddingTop: "90px",
          }}
        >
          <h1
            style={{ fontSize: "40px", color: "#DB3218", fontFamily: "sans" }}
          >
            A Fintech Company, Enabling Digital Transactions Globally
          </h1>
          <h4
            style={{ fontSize: "30px", color: "#333E63", fontFamily: "sans" }}
          >
            Digital Payment Solutions
          </h4>
          <h4
            style={{ fontSize: "30px", color: "#333E63", fontFamily: "sans" }}
          >
            Enterprise Software Platform
          </h4>
        </div>
        <div>
          <video
            autoPlay="autoplay"
            loop
            muted
            src="https://www.ia.ooo/wp-content/uploads/2021/02/home_video.mp4"
          ></video>
        </div>
      </div>

      <h1 style={{ fontSize: "50px" }}>WHO WE ARE...</h1>

      <div style={{ fontSize: "25px" }}>
        <p>
          We are an Indian multinational Financial Technology Company that
          offers integrated & scalable digital platforms consisting of Digital
          Payment Solution under the brand name CCAvenue and Enterprise Software
          solutions under the brand name BuildaBazaar. We are the only listed
          home-grown, bootstrapped, and profitable Fintech conglomerate having a
          comprehensive Fintech portfolio.
        </p>
        <p>
          Our diversified Fintech solution stacked under one roof aims to
          simplify business operations and transaction processing for merchants,
          enterprises, governments and banks. With over two decades legacy in
          digital payment and enterprise software solution, today we are among
          very few leading Fintech companies in India having a strong presence
          in the international market which includes Kingdom of Saudi Arabia,
          United Arab Emirates and the United States.
        </p>
        <p>
          Fintech Technology enables businesses to execute digital transactions
          in a safe and secure manner.
        </p>
      </div>

      <div style={{backgroundColor:'333E63'}}>
        <h1 style={{ fontSize: "50px", fontFamily: "sans" }}>WHY US...</h1>

        <Grid
          gridTemplateColumns="repeat(3,1fr)"
          templateRows="repeat(2,1fr)"
          h="450px"
          gap="25px"
          color="#FFFFFF"
          fontWeight="bold"
          borderRadius="30px"
          fontSize="30px"
        >
          <GridItem
            style={{
              borderRadius: "30px",
              marginLeft: "20px",
              padding: "50px",
            }}
            bg="#333E63"
          >
            An Integrated and scalable business model
          </GridItem>
          <GridItem
            style={{ borderRadius: "30px", padding: "50px" }}
            bg="#333E63"
          >
            Diversified offerings for a diversified customer base
          </GridItem>
          <GridItem
            style={{
              borderRadius: "30px",
              marginRight: "20px",
              padding: "70px",
            }}
            bg="#333E63"
          >
            Strong brand equity
          </GridItem>
          <GridItem
            style={{
              borderRadius: "30px",
              marginLeft: "20px",
              padding: "35px",
            }}
            bg="#333E63"
          >
            {">"}5,000,000 Merchants in India and International markets
          </GridItem>
          <GridItem
            style={{ borderRadius: "30px", padding: "45px" }}
            bg="#333E63"
          >
            Top 3 In India, among online payment solution providers
          </GridItem>
          <GridItem
            style={{
              borderRadius: "30px",
              marginRight: "20px",
              padding: "40px",
            }}
            bg="#333E63"
          >
            5 Countries served: India, the UAE, the KSA, Oman, the USA
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
