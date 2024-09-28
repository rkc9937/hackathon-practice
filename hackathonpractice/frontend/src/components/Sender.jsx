import {useState, useEffect} from 'react';
import {Button, Container, Input} from '@mui/material/';
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
            console.log(reader.result);  // Log the result of the FileReader (base64 or URL)
            setImg(reader.result);  // Set the result to the img state
          };
          reader.readAsDataURL(file);  // Read the file as a data URL
        }
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
        }).catch( (error) => {
            console.log(error);
        });
    }

    return(
        <div>
            <Input type="file" accept="image/*" onChange={handleImageChange} />  {/* File input */}
            { console.log(img) }
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