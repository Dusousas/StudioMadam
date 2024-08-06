import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Whatsapp() {
    return (
        <>
            <div className="whatsapp">
                <a href="" target="_blank">
                    <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                </a>
            </div>
        </>
    )
}