export default function Footer() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/05/06/42/60/240_F_506426044_aQElReVJ45luySKZ0yMzu9SzcnKZOYvH.jpg')",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          margin: "30px",
        }}
      >
        <div>
          <h1 style={{fontFamily:'sans',fontSize:'25px'}}>CONTACT US</h1>
          <p>
            28th Floor, GIFT Two Building, Block No. 56, Road - 5C, Zone - 5,
            GIFT CITY, Gandhinagar, Taluka & District - Gandhinagar – 382 355
            Gujarat, India
          </p>
          <p>+91 79 6777 2200/01/02/03/04</p>
          <p>contactus@ia.ooo</p>
        </div>
        <div>
          <h1 style={{fontFamily:'sans',fontSize:'25px'}}>COMPANY</h1>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Legal disclaimer</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h1 style={{fontFamily:'sans',fontSize:'25px'}}>BUSINESS</h1>
          <p>Payments</p>
          <p>Platform</p>
          <p>What's happening</p>
        </div>
        <div>
          <h1 style={{fontFamily:'sans',fontSize:'25px'}}>INVESTOR RELATIONS</h1>
          <p>Board of Directors</p>
          <p>Key Management Personnel</p>
          <p>Compliance Officer</p>
        </div>
        <div>
          <h1 style={{fontFamily:'sans',fontSize:'25px'}}>POLICIES</h1>
          <p>Materiality of Events</p>
          <p>Related Party Transformation Policy</p>
          <p>Website Content Archival Policy</p>
          <p>Risk Management Policy</p>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", height: "50px" }}>
        <div style={{ display: "flex", margin: "10px" }}>
          <img
            style={{ width: "40px", height: "30px" }}
            src="https://www.worldometers.info/img/flags/small/tn_in-flag.gif"
            alt="india image"
          />
          <span style={{ margin: "auto" }}>INDIA</span>
        </div>
        <div style={{ display: "flex", margin: "10px" }}>
          <img
            style={{ width: "40px", height: "30px" }}
            src="https://www.worldometers.info/img/flags/small/tn_us-flag.gif"
            alt="US image"
          />
          <span style={{ margin: "auto" }}>US</span>
        </div>
        <div style={{ display: "flex", margin: "10px" }}>
          <img
            style={{ width: "40px", height: "30px" }}
            src="https://www.worldometers.info/img/flags/small/tn_ae-flag.gif"
            alt="arab image"
          />
          <span style={{ margin: "auto" }}>U.A.E</span>
        </div>
        <span style={{ margin: "auto" }}> Copyright © 2023 IA.OOO</span>
        <div style={{ display: "flex", margin: "10px" }}>
          <img
            style={{ width: "50px", height: "30px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGmDPEWnYkJ55GRkTly5BrKLM2SlUYO8Na4qih2wI&s"
            alt="fb logo"
          />
          <img
            style={{ width: "40px", height: "30px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUAd7f///8AdLb3+/1hm8lTksRRj8MAcrUAa7K81eeyzOJyps4AcLRXlMUAbrMAaLDc6PKrxuBtocs5i8EKe7mYu9nO4O3i7fXr9Pk7hL2Fr9N8qM+NtNZCicCfwNyoyOAvhqi+AAADoUlEQVR4nO2c25KyOhCFkwYNYAwHEUFl8/5v+aMzjAodg7HosKuyLuYmKfjsnDorZBj/UZYXh5KRqTwUefb7avYDUIACoCNgDPoXFtkDoQNJ+fpBEroB4Zi6ALgpPf4gdM4IeobuhpCR9oGxIOsRCif9YJAsOHMbhFsYWK7cIqicFa6jULCDa4QDI5yVcTkHeC8hlVBSuHt/KnZ5Eif5BVInFKCKig+qdoq+y4r2AXBfy1vqGVQVAX9VsKOdwKIzn+pKuZz2CwemHV1bQDluhd+2KMn6pOpQAs4TqjBAiwehV0sUBvWfjoB3RKNCnbQIJxoCaLTtwAOaloBQS8A5TXYDlzcIO5L1ag0I+NRI2hD6aYEHe5qJAWotwokoy0tjLUIc0SDAXosQUiVwUGkIKrKVUmw0CESd8SbNQpUQ9YS70B5Z0fogkExHA6PN40FeRwRHQb6TUM1zY8QtZT8YBBE7x1ld11l8ZZGj/T8IycqyZFI6NiC8vhL0Erc/3zzgRR8VSwVlc9jsw/2mbZhQFssbqHL/qubZYYDoMCpun7qsiNglqU5D5hNkVR6qjw2KcrpYVs3fQ6DMJsX14NtF7Dot7WeWMPooFCm2XGd/s5PAius7goBOl/edwg8iAQ36jO3vEzTZ5aYvlqF+K9ZHopkdCMAThnBA2KIIfUp1P1x4o7qduym1RJCRPut8VFoUIcqNBDyYyWCHsBmv76jqeTtjO4Srfgv0rNOs5MsOYa6Oc5piWQTezGiKhRHm2EULIwQzwrAwAj+aw7A0wsk9wgybYmmEGS2xOIJ5b/gdQnYs9vtwl+jNGs6NG6NvEKptpG5Jq4jUTl/NeDT6BcI1fcohlc4r4WdT7mKPcH7pZ8B0DLlpnbBGSEY9Xetnx0shBJOxpjSZnPF7BVuE8/S3SbxmbSCwRagRY1SXTpo8VEuEDhntEjtu5OacwRIhRB6rq2uaGOwQcINa42gvg1ChAy3Ft1dYxL5HwL/KQbennBeG6dEOARmSTDsklkHAbfpoaqKuBMF0yOURPIJH8AgewSN4BI/gETyCR/AIHsEjeIT/O8LBCgG1jywRmMLeEfwVl6iLhruZGuPReBogsK+AH16Swh6rNdexbzoS84cMqk3iVyXbJ0NNbeOxCt1BC0THSeXLnHNrkGPB++I3P2tS1+E1KL2c3x8r13CNbwWXGVdwpXMFF1tXcL13DZecV3DVew0X3tdw7X8N//yAO/0XEP8AF8xDFrjLQ2YAAAAASUVORK5CYII="
            alt="LinkedIn logo"
          />
        </div>
      </div>
    </div>
  );
}
