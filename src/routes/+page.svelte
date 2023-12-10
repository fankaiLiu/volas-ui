<script lang="ts">
	import { useRequest } from 'alova';
	import { alovaInst } from '../api/api';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	const { loading, data, error } = useRequest(alovaInst.Get('/system/info'));

	const toastStore = getToastStore();
	//error
	$: if ($error) {
		console.log('Error is:', $error);
		const t: ToastSettings = {
			message: $error
		};
		toastStore.trigger(t);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Volas</h2>
		{#if $loading}
			<div>Loading...</div>
		{:else if $error}
			<div>error is {$error}</div>
		{:else}
			<pre>responseData: {$data ? JSON.stringify($data) : 'Loading data...'}</pre>
		{/if}
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
