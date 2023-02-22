import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#BDC3C7",
        padding: "auto",
        alignItems: "center",
      }}
    >
      <div>
        <Box style={{ width: "300px", height: "90px", padding: "0px" }}>
          <Image src="/fitfinancerlogofinal.png" alt="Dan Abramov" />
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#BDC3C7",
          padding: "auto",
          alignItems: "center",
        }}
      >
        <Menu>
          <MenuButton as={Button}>COMPANY</MenuButton>
          <MenuList>
            <MenuItem>About us</MenuItem>
            <MenuItem>Key Management Personnel</MenuItem>
            <MenuItem>Listing</MenuItem>
            <MenuItem>Founders</MenuItem>
            <MenuItem>Board of Directors</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button}>IAL BUSINESS SOLUTIONS</MenuButton>
          <MenuList>
            <MenuItem>CCAvenue Payment Acquiring</MenuItem>
            <MenuItem>CCAvenue Payment Issuance</MenuItem>
            <MenuItem>CCAvenue Neo Banking</MenuItem>
            <MenuItem>Enterprise Marketplace Platforms</MenuItem>
            <MenuItem>Bill Payments Platform</MenuItem>
            <MenuItem>Hospitality Platform</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button}>INVESTORS RELATIONS</MenuButton>
          <MenuList>
            <MenuItem>Announcements</MenuItem>
            <MenuItem>Financial Results</MenuItem>
            <MenuItem>Composition of Committee</MenuItem>
            <MenuItem>Shareholding Pattern</MenuItem>
            <MenuItem>Corporate Governance Report</MenuItem>
            <MenuItem>Code of Conduct & Policies</MenuItem>
            <MenuItem>Investor Grievance</MenuItem>
            <MenuItem>Materiality of Events</MenuItem>
            <MenuItem>Annual Return</MenuItem>
            <MenuItem>Annual Secretarial Compliance Report</MenuItem>
            <MenuItem>Monitoring Agency Report</MenuItem>
          </MenuList>
        </Menu>
        <Button>
          <Link to="/corporatevideos">CORPORATE VIDEOS</Link>
        </Button>
        <Button>
          <Link to="/media">MEDIA</Link>
        </Button>
        <Button>
          <Link to="/contactus">CONTACT US</Link>
        </Button>
      </div>
    </div>
  );
}
