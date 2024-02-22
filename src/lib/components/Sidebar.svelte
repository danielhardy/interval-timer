<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	// export let show_sidebar: Boolean = true;
	export let show_sidebar;

	function close_on_escape(e: { key: string }) {
		if (e.key == 'Escape') {
			show_sidebar = false;
		}
	}
</script>

<svelte:window on:keydown={close_on_escape} />

{#if show_sidebar}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<button
		class="fixed top-0 right-0 w-full h-full bg-base-200 opacity-70 z-50 shadow-xl"
		transition:fade
		on:click={() => {
			show_sidebar = false;
		}}
	/>
	<div
		class="flex flex-col fixed top-0 right-0 px-8 pt-4 pb-8 w-full md:w-96 z-50 h-full bg-base-100 drop-shadow-2xl md:border-l border-base-200 overflow-y-auto"
		transition:fly={{ x: 380, opacity: 1 }}
	>
		<div class="sidebar-actions">
			<button
				class="text-sm link"
				on:click={() => {
					show_sidebar = false;
				}}
			>
				Close
			</button>
		</div>
		<div class="sidebar-content flex-grow flex flex-col justify-center content-center">
			<div>
				<slot {show_sidebar} />
			</div>
		</div>
	</div>
{/if}
