<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	let show_sidebar: Boolean = false;

	import { Timer } from '$lib/Timer.svelte';

	//Set some defaults;
	//TODO make these sticky... cookie or Dexie?
	let customInterval = 30;
	let customRest = 10;

	//Start the new timer
	let t = new Timer(customInterval, customRest);
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.code == 'Space') {
			t.isRunning ? t.stop() : t.start();
		}
	}}
/>
<div
	class="flex flex-col items-center justify-center h-screen"
	class:bg-green-400={t.isIntervalRunning}
>
	<div class="w-full max-w-lg">
		<h1 class="flex-1 text-[18em] font-bold text-center">{t.time}</h1>
		<div class="actions mt-8">
			{#if !t.isRunning}
				<button class="btn btn-glass btn-block mb-4" on:click={() => t.start()}>Start</button>
			{:else}
				<button class="btn btn-glass btn-block mb-4" on:click={() => t.stop()}>Pause</button>
			{/if}
			<div class="flex gap-4">
				<button class="btn btn-glass flex-grow" on:click={() => t.reset()}>Reset</button>
				<button class="btn btn-glass flex-grow" on:click={() => (show_sidebar = !show_sidebar)}
					>Configure</button
				>
			</div>
		</div>
	</div>

	<Sidebar {show_sidebar}>
		<div class="form-control mb-4">
			<label class="label label-text" for="customInterval">Interval Time (sec)</label>
			<input
				class="input input-bordered w-full"
				type="number"
				min="1"
				max="100"
				name="customInterval"
				bind:value={customInterval}
			/>
		</div>
		<div class="form-control mb-4">
			<label class="label label-text" for="customInterval">Rest Time (sec)</label>
			<input
				class="input input-bordered w-full"
				type="number"
				min="1"
				max="100"
				name="customRest"
				bind:value={customRest}
			/>
		</div>
		<button
			class="btn btn-primary btn-block"
			on:click={() => {
				t.update(customInterval, customRest);
			}}>Save</button
		>
	</Sidebar>
</div>
