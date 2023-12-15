import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        Form1data: [],
        Form2data: {},
        Fetchdata: [],
       SingleData : {},
    },
    reducers: {
        setData: (state, action) => {
            state.Form1data = action.payload;
        },
        setfetchData: (state, action) => {
            state.Fetchdata = action.payload;
        },
        EditData: (state, action) => {
          let singledata = state.Fetchdata.filter((curr) => curr.id === action.payload);
          state.SingleData = singledata;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(Setdata2Async.fulfilled, (state, action) => {
          const x = action.payload;
          state.Form2data = { ...state.Form1data, ...x };
        });
      }
});

export const { setData, setData2, setfetchData,EditData,Editform} = dataSlice.actions;

const delay=()=>new Promise(resolve=>setTimeout(resolve,100));

export const Setdata2Async = createAsyncThunk("data/setdata2Async", async (obj) => {
  await delay();
  return obj;
});


export default dataSlice.reducer;




