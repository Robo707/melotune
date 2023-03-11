import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'f20c461f8amshd29319a151c1284p17fe2cjsn04596917c1b0',
//         'X-RapidAPI-Host': '',
//     },
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key', 'f20c461f8amshd29319a151c1284p17fe2cjsn04596917c1b0');
            return headers;
        },
    }),
    
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: '/charts/world'}),
        
    }),
    
})


export const {useGetTopChartsQuery} = shazamCoreApi;