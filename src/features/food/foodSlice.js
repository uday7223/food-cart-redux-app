import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch food items
export const fetchFoodItems = createAsyncThunk('food/fetchFoodItems', async () => {
    // const response = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627');
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch('http://localhost:4002/foodItems');    
    const response = await data.json();
    // return data.menu.items; // Ensure this path exists in the fetched data
    // const fetchedItems = response?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || {};
    // const fetchedItems = response?.data || {};

    console.log('Fetched data:', response);

return response;

});


const foodSlice = createSlice({
    name: 'food',
    initialState: {
        items: [
            
          
        ],
        status: 'idle', // idle | loading | succeeded | failed
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoodItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFoodItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // state.items = Object.values(action.payload); // Convert object to array
                state.items = action.payload; // Directly assign the array to the state

            })
            .addCase(fetchFoodItems.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default foodSlice.reducer;
