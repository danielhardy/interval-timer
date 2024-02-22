//What is the timer's length;
let startIntervalTime = 10;

//How long will the breaks be;
let startRestTime = 5;

//Track whether the timer is running or not;

export class Timer {
	private timer;
	public time = $state(30);
	public intervalTime;
	public restTime;

	public isIntervalRunning = $state(false);
	//Track whether it is running
	public isRunning = $state(false);

	constructor(intervalTime, restTime) {
		this.intervalTime = intervalTime;
		this.restTime = restTime;
		this.time = intervalTime;
	}
	public start() {
		this.timer = setInterval(() => this.countDown(), 1000);
		this.isRunning = true;
		this.isIntervalRunning = true;
		console.log(this);
	}
	public stop() {
		clearInterval(this.timer);
		this.isIntervalRunning = false;
		this.isRunning = false;
	}
	public reset() {
		this.time = this.intervalTime;
		clearInterval(this.timer);
	}
	public update(updateIntervalTime, updateRestTime) {
		this.intervalTime = updateIntervalTime;
		this.restTime = updateRestTime;
		this.time = this.intervalTime;
	}
	private countDown() {
		console.log(this);
		if (this.time > 0) {
			this.time--;
		} else {
			this.time = this.isIntervalRunning ? this.restTime : this.intervalTime;
			this.isIntervalRunning = !this.isIntervalRunning;
		}
	}
}
