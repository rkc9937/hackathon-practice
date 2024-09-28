import {useState, useEffect} from 'react';

function Sender() {
    const [img, setImg] = useState(null);

    function sendImageToServer() {

    }

    return(
        <div>
            <Button onClick={sendImageToServer}>Send Image</Button>
        </div>
    )
}
export default Sender;