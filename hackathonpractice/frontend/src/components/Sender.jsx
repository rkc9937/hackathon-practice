import {useState, useEffect} from 'react';
import {Button, Container, Input, Card, CardContent, CardHeader, Typography, TextField, MenuItem, Select, FormControl, InputLabel} from '@mui/material/';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const CustomFormControl = styled(FormControl)`
    flex-direction: row;
    gap: 1rem;
`;

function Sender() {
    const [img, setImg] = useState(null);
    const [items, setItems] = useState([]);
    const [priceDollarFilter, setPriceDollarFilter] = useState(0);
    const [sortByFilter, setsortByFilter] = useState('');

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

    function applyFilters() {
        // console.log("In applyFilters");
        console.log(priceDollarFilter);
        console.log(sortByFilter);
        //modify the items array based on the filters
        let newItems = items;

        //Sort by price
        if(sortByFilter === 'low-to-high') {
            newItems.sort((a, b) => {
                return a.price - b.price;
            });
        } else if(sortByFilter === 'high-to-low') {
            newItems.sort((a, b) => {
                return b.price - a.price;
            });
        }
        setItems(newItems);
        console.log(items);
    }

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

            <div id="send-image">
                <Input type="file" accept="image/*" onChange={handleImageChange} />  {/* File input */ }
                { console.log(img) }
                <Button  variant="contained" onClick={sendImageToServer}>Send Image</Button> 
            </div>
            { console.log(items) }
            {items.length > 0 ?
                <div class="filter-options">
                    <Typography variant="h5">Filter Options</Typography>
                    <CustomFormControl classes={'flexRow'}>
                        <InputLabel htmlFor="my-input">Price</InputLabel>
                        <Input color={'secondary'} id="my-input" aria-describedby="my-helper-text" onChange={(e) => setPriceDollarFilter(e.target.value)} />
                        <Select>
                            <MenuItem value={1} onClick={() => setsortByFilter('low-to-high')}>Price Lowest to Highest</MenuItem>
                            <MenuItem value={2} onClick={() => setsortByFilter('high-to-low')}>Price Highest to Lowest</MenuItem>
                        </Select>
                        <Button variant="contained" onClick={applyFilters}>Apply Filters</Button>
                    </CustomFormControl>
                </div> : null }
            <div id="items">
            {items.length > 0 ?  
                items.map((item) => {
                    return (
                        <Container>
                            <Card sx={{':hover': { boxShadow: 20,  },}}>
                                <CardHeader title={item.name} />
                                <CardContent><Typography variant="body2" sx={{ color: 'text.secondary' }}>{"$" + item.price}</Typography></CardContent>
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