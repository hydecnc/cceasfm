<script>
	/** @type {import('./$types').PageServerData} */
	export let data;
	console.log(data);
</script>

<div class="flex flex-col justify-center items-center space-y-6">
	<!-- <div class=""> -->
	<a href="/" class="mx-auto max-w-full h-auto"
		><img src="/asfm_logo.png" alt="ASFM Logo" class="mt-10 w-36 h-40 lg:w-48 lg:h-52" /></a
	>
	<a class="btn variant-filled-primary absolute top-0 right-2 lg:top-2 lg:right-8 font-bold" href="/activities"
		>Activities</a
	>

	<h1 class="h1 font-bold text-center">{data.name}</h1>
	<div class="grid grid-cols-1 gap-4 w-4/5 lg:grid-cols-2">
		<div class="card variant-outline-secondary">SOME KIND OF IMAGE</div>
		<div class="card p-5 variant-outline-secondary">
			<div class="text-center h3 pb-4 font-bold">Project Description</div>
			<div class="whitespace-pre-line">
				{data.description}
			</div>
		</div>
		<div class="card variant-outline-secondary p-5 whitespace-pre-line">
			<div class="text-center h3 pb-4 font-bold">Activity Schedule</div>
			{data.schedule}
		</div>
		<div class="card variant-outline-secondary p-5 flex flex-col space-y-2">
			<div>
				<div class="font-bold">Volunteer Positions:</div>
				{data.volunteerPositions}
			</div>
			<div>
				<div class="font-bold">CCE Hours:</div>
				{data.hoursRewarded}
			</div>
		</div>
	</div>
</div>
