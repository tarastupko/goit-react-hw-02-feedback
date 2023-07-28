import { Title, Sections } from "./Section.styled"
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
         <Sections>
            <Title>{title}</Title>
            {children}
        </Sections>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}