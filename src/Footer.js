

const Footer = ({ length }) => {

    return (

        <footer>
            <p className="footer">
                You have {length} list {length === 1 ? "item" : "items"} to do
            </p>
        </footer>
    )
}

export default Footer;