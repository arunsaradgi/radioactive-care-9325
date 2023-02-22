import { Grid, Link, Image } from "@chakra-ui/react";

const sx = {
    footer: {
        placeItems: "center",
        py: { base: "2.4rem", md: "4rem" },
    },
    link: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: 0.3,
        filter: "saturate(0) brightness(0)",
        _focus: {
            opacity: 1,
            filter: "initial",
        },
        _hover: {
            opacity: 1,
            filter: "initial",
        },
    },
    logo: {
        height: { base: "20px", md: "35px" },
    },
};

function Footer(props) {
    return (
        <Grid {...sx.footer} {...props}>
            <Link
                {...sx.link}
                title="Made by Azavea"
                onClick={e => e.stopPropagation()}
            >
            </Link>
        </Grid>
    );
}

export default Footer;