import {useState, useEffect} from 'react';
import {Button, Container, Input, Card, CardContent, CardHeader, Typography} from '@mui/material/';
import axios from 'axios';

function Sender() {
    const [img, setImg] = useState(null);
    const [items, setItems] = useState([]);

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

    // function getItems() {
    //     axios({
    //         method: 'GET',
    //         url: 'http://0.0.0.0:8000/api/imgSearch/'
    //     }).then((response) => {
    //         //Once we get a response from the server, set the items state to the response data
    //         console.log(response.data);
    //         for(let i = 0; i < response.data.length; i++) {
    //             setItems([...items, {
    //                 'name': response.data[i].item_name,
    //                 'description': response.data[i].item_description,
    //                 'price': response.data[i].item_price
    //             }]);
    //         }
    //         // setItems(response.data);
    //     }).catch( (error) => {
    //         console.log(error);
    //     });

    // }

    function sendImageToServer() {
        axios(
            {
                method: 'POST',
                url: 'http://localhost:8000/api/imgSearch/',
                data: {
                    img: img
                }
            }
        ).then((response) => {
            //Once we get a response from the server, set the items state to the response data
            console.log("In sendImageToServer");
            // console.log(response.data);
            if(response.status === 200) {
                console.log(response.data);
                response.data['results'].forEach( (item) => {
                    console.log(item);
                    // setItems([...items, {
                    //     'name': item.item_name,
                    //     'description': item.item_description,
                    //     'price': item.item_price
                    // }]);
                    setItems(items => [...items, {
                        'name': item.item_name,
                        'description': item.item_description,
                        'price': item.item_price
                    }]
                    )
                });
            }
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
            { console.log(items) }
            <div id="items">
            {items.length > 1 ?  
                items.map((item) => {
                    return (
                        <Container>
                            <Card>
                                <CardHeader title={item.name} />
                                <CardContent><Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.price}</Typography></CardContent>
                                <CardContent><Typography>{item.description}</Typography></CardContent>
                            </Card>
                        </Container>
                    )
                })
                : null
            }
            </div>
        </div>
    )
}
export default Sender;