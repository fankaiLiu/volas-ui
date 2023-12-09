import { createAlova } from 'alova';
import SvelteHook from 'alova/svelte';
import GlobalFetch from 'alova/GlobalFetch';
import { currentStatus } from './config';


export const alovaInst = createAlova({
  baseURL: "http://localhost:5800",
	// SvelteHook is used to create ref status, including request status loading, response data data, request error object error, etc.
	statesHook: SvelteHook,
	// request adapter, it is recommended to use the fetch request adapter
	requestAdapter: GlobalFetch(),
  responsed: async (response) => {
    console.log("response",response)
    if(response.ok)
    {
      const data = await response.json();
      console.log(data);
      return data;
    }
    else{
      let error = await response.json();
      console.log("throw error",error)
      throw new Error(error.msg);
    }
  }
});
