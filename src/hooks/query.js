import React from 'react'
import Api from '../services/api';
import { useQuery } from 'react-query';
const Query = (URL) => {
    return useQuery("posts", async () => {
        const { data } = await Api.get(URL);
        
        return data;
    },{
        enabled:false
    });
}

export default Query