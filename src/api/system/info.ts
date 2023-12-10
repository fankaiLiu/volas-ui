import { useRequest } from 'alova';
import { alovaInst } from '../api';
const { loading, data, error } = useRequest(alovaInst.Get('/system/info'));

interface SystemInfo {
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
