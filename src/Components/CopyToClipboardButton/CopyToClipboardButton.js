import './CopyToClipboardButton.scss';

const CopyToClipboardButton = ({ handleCopyToCLipBoard }) => {

    return <button className='copy-to-clipboard-button-wrapper' onClick={handleCopyToCLipBoard}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/copy.png" className="copy-icon" />
        <span>Copy to clipboard</span>
    </button>
}

export default CopyToClipboardButton;