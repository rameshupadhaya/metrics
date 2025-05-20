import { h } from 'preact';
import { Footer as StyledFooter } from '../styles/StyledComponents';

const Footer = () => {
    // Get current year for the copyright
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            {/* <p>Performance Report © {currentYear}</p> */}
        </StyledFooter>
    );
};

export default Footer;