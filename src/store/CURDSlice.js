import axios from 'axios';
import { setfetchData } from './DataSlice';

export const addnewuser = (Alldata) => async (dispatch) => {

    try {
       await axios.post('https://6576bdcf424e2adad5b49459.mockapi.io/users', Alldata);
    } catch (error) {
        console.error('Error posting data to MockAPI:', error);
    }
};


export const fetchAlldata = () => async (dispatch) => {
    try {
        const res = await axios.get('https://6576bdcf424e2adad5b49459.mockapi.io/users');
        const data = res.data;
        dispatch(setfetchData(data));
    } catch (error) {
        console.error('Error fetching data from MockAPI:', error);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://6576bdcf424e2adad5b49459.mockapi.io/users/${id}`);
        dispatch(fetchAlldata());
    } catch (error) {
        console.error('Error deleting user from MockAPI:', error);
    }
};

export const Putdata = (data) => async (dispatch) => {
    const {id}=data;
    try {
        await axios.put(`https://6576bdcf424e2adad5b49459.mockapi.io/users/${id}`,data);
    } catch (error) {
        console.error('Error deleting user from MockAPI:', error);
    }
};