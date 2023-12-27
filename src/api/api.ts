import { createAlova } from 'alova';
import SvelteHook from 'alova/svelte';
import GlobalFetch from 'alova/GlobalFetch';
import { currentStatus } from '../config';

export interface Response<T> {
  code: number;
  data: T;
  msg: string;
}

export const alovaInst = createAlova({
  baseURL: "http://localhost:5800",
	statesHook: SvelteHook,
	requestAdapter: GlobalFetch(),
  responsed: async (response) => {
    console.log("response",response)
    if(response.ok)
    {
      const data = await response.json();
      return data;
    }
    else{
      let error = await response.json();
      throw new Error(error.msg);
    }
  }
});
