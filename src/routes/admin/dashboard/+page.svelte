<script>
	import ActivityInput from '$lib/ActivityInput.svelte';
	import { auth } from '$lib/firebase';
	import { redirect } from '@sveltejs/kit';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { app, db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';

	onMount(async () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
			} else {
				throw redirect(302, '/admin');
			}
		});
	});

	/**
	 * @type {string[]}
	 */
	let [activityName, description, schedule, volunteerPositions, hoursRewarded, requirements] = [];
	/**
	 * @type {File}
	 */
	let programImage;

	const uploadActivity = async () => {
		const uploadData = {
			name: activityName,
			description: description,
			schedule: schedule,
			volunteerPositions: volunteerPositions,
			hoursRewarded: hoursRewarded,
			requirements: requirements
		};
		console.log(uploadData);
		const docRef = await addDoc(collection(db, 'activities'), uploadData);
	};
</script>

<div class="p-5 grid grid-cols-2">
	<ActivityInput fieldName="Name" bind:val={activityName} />
	<ActivityInput fieldName="Program Description" bind:val={description} />
	<ActivityInput fieldName="Activity Schedule" bind:val={schedule} />
	<ActivityInput fieldName="Volunteer Positions" bind:val={volunteerPositions} />
	<ActivityInput fieldName="Hours Rewarded" bind:val={hoursRewarded} />
	<ActivityInput fieldName="Requirements" bind:val={requirements} />

	<div class="w-full m-3">
		<div class="font-bold text-2xl mb-1">Image</div>
		<input type="file" bind:value={programImage} alt="program image" />
	</div>

	<button class="btn variant-filled-primary w-2/3 ml-4 mt-5" on:click={uploadActivity}>
		Upload Activity
	</button>
</div>
