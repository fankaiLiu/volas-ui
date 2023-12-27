import { useRequest } from 'alova';
import { alovaInst,type Response } from '../api';
import type { Writable } from 'svelte/store';
const { loading, data, error }: { loading: Writable<boolean>; data: Writable<Response<SystemInfo>>; error: any } = useRequest(alovaInst.Get('/system/info'));
export const requestResult = useRequest(alovaInst.Get('/system/info'));
export interface SystemInfo {
	system_name: string;
	kernel_version: string;
	os_version: string;
	host_name: string;
	cpu_count: number;
	components: Component[];
	memory_info: Memoryinfo;
	percent_memory_used: number;
}
interface Memoryinfo {
	total_memory: number;
	used_memory: number;
	total_swap: number;
	used_swap: number;
}
interface Component {
	name: string;
	temperature: number;
}