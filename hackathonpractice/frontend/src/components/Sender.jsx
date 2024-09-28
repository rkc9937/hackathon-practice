import {useState, useEffect} from 'react';
import {Button, Container} from '@mui/material/';
import axios from 'axios';

function Sender() {
    const [img, setImg] = useState(null);
    const [items, setItems] = useState([{
            'name': '',
            'price': '',
            'description': ''
    }]);

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
        axios(
            {
                method: 'POST',
                url: '/img/',
                data: {
                    img: img
                }
            }
        ).then((response) => {
            //Once we get a response from the server, set the items state to the response data
            console.log(response.data);
            setItems(response.data); 
        });

    }

    return(
        <div>
            <input type="file" multiple accept='img/*' onChange={handleImageChange}/>
            <div id="send-image">

                <Button  variant="contained" onClick={sendImageToServer}>Send Image</Button> 
            </div>
            {items.map((item) => {
                return (
                    <Container>
                        <h1>{item.name}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.description}</h1>
                    </Container>
                )
            })}
        </div>
    )
}
export default Sender;