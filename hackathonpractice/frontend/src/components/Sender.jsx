import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';

function Sender() {
    const [img, setImg] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];  // Get the selected file
        if (file) {
          const reader = new FileReader();  // Create a FileReader to read the file
          reader.onloadend = () => {
            setImg(reader.result);  // Set the image state to the result of the FileReader (base64 or URL)
          };
          reader.readAsDataURL(file);  // Read the file as a data URL
        }
        console.log(img)
      };

    function sendImageToServer() {

    }

    return(
        <div>
            <input type="file" multiple accept='img/*' onChange={handleImageChange}/>
            <Button onClick={sendImageToServer}>Send Image</Button>
        </div>
    )
}
export default Sender;