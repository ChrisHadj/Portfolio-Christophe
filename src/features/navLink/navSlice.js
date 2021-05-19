import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    links: [ "Home page", "About me", "Portfolio", "Skills", "Contact"]
}

const navSlice = createSlice({
    name: "link",
    initialState,
    reducers: {}
})

export const selectLinks = state => state.link.links

export default navSlice.reducer