<script lang="ts">
	//What is the timer's length;
	let startIntervalTime = 30;

	//How long will the breaks be;
	let startRestTime = 10;

	//This will track the time;
	let time = $state(startIntervalTime);

	//This becomes the timer
	let timer;

	//Track whether the timer is running or not;
	let isIntervalRunning = $state(false);

	//Track whether it is running
	let isRunning = $state(false);

	function countDown() {
		if (time > 0) {
			time--;
		} else {
			time = isIntervalRunning ? startRestTime : startIntervalTime;
			isIntervalRunning = !isIntervalRunning;
		}
	}

	function startTimer() {
		timer = setInterval(countDown, 1000);
		isRunning = true;
		isIntervalRunning = true;
	}
	function stopTimer() {
		clearInterval(timer);
		isIntervalRunning = false;
		isRunning = false;
	}
	function resetTimer() {
		time = startIntervalTime;
		clearInterval(timer);
	}
</script>

<div class="flex items-center justify-center h-screen" class:bg-green-400={isIntervalRunning}>
	<div class="w-full max-w-lg">
		<h1 class="text-[18em] font-bold text-center">{time}</h1>
		<div class="actions mt-8">
			{#if !isRunning}
				<button class="btn btn-outline btn-block mb-4" on:click={startTimer}>Start</button>
			{:else}
				<button class="btn btn-outline btn-block mb-4" on:click={stopTimer}>Pause</button>
			{/if}
			<button class="btn btn-link btn-block mb-4" on:click={resetTimer}>Reset</button>
		</div>
	</div>
</div>
