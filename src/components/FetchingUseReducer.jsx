import React, { useReducer } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = { loading: true, data:null, error:null };
const FetchingUseReducer = () => {

  const fetchData = (state, action) =>{
    switch (action.type) {
      case FETCH_INIT:
        return {...state, loading:true, data:null };

      case FETCH_SUCCESS:
        return {...state, loading:false, data:action.payload };

      case FETCH_ERROR:
        return {...state, loading:false, error:action.payload };
    
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(fetchData, initialState);

  useEffect(()=>{
    console.log("Started")
    dispatch({ type:FETCH_INIT });
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res=> dispatch({ type:FETCH_SUCCESS, payload:res.data }))
    .catch(err=> dispatch({ type: FETCH_ERROR, payload:err}))
  },[]);

  const {loading, data, error} = state;
  
  return (
    <>
      {loading && <p>Loading</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {data && (
        <>
          <table className='table table-bordered table-hover table-striped'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Album Id</th>
                <th>Title</th>
                <th>Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item=>{
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.albumId}</td>
                    <td>{item.title}</td>
                    <td><img src="https://dummyjson.com/image/250x100" alt={item.title} width={100}/></td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </>
      )}
    </>
  )
}

export default FetchingUseReducer