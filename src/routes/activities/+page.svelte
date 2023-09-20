<script>
	// let data = [
	// 	{ name: 'MCC Wallpainting @ Eduardo Caballero School', date: '', volunteerPositions: "30/day", hoursRewarded: "3/day", },
	// 	{ name: 'Unidos Sábados del Rol', date: '', volunteerPositions: 20, hoursRewarded: 34, },
	// 	{ name: 'Mas Utiles', date: 'TUE & THU', volunteerPositions: 7, hoursRewarded: 13, },
	// 	{ name: 'Mas Utiles', date: 'MON & WED', volunteerPositions: 7, hoursRewarded: 13, },
	// 	{ name: 'A Roof in ASFM November Construction', date: '', volunteerPositions: 112, hoursRewarded: 22, }
	// ];
	import { app, db, storage } from '$lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';
	import { getDownloadURL, ref } from 'firebase/storage';
	import { onMount } from 'svelte';

	/**
	 * @type {import("@firebase/firestore").DocumentData[]}
	 */
	let data = [];

	/**
	 * @type {string[]}
	 */
	let id = [];

	const getQuerySnapshot = async () => {
		const querySnapshot = await getDocs(collection(db, 'activities'));
		querySnapshot.forEach((doc) => {
			id.push(doc.id);
		});
		return querySnapshot;
	};

	let promise = getQuerySnapshot();

	/**
	 * @type {string}
	 */
	// let downloadUrl;
	// const downloadImage = async (fileName) => {
	// 	try {
	// 		const fileRef = ref(storage, "activities/fotomasutiles.png");
	// 		downloadUrl = await getDownloadURL(fileRef);				
	// 	} catch (error) {
	// 		console.error('Error downloading file:', error);
	// 	}
	// }

	// onMount(() => {
	// 	downloadImage();
	// })
</script>

<div class="flex flex-col justify-center items-center space-y-8">
	<a href="/"><img src="/asfm_logo.png" alt="ASFM Logo" width="200" height="200" class="mt-10" /></a
	>
	<div class="text-7xl">ACTIVITES</div>

	<div class="grid grid-cols-1 w-4/5 gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#await promise then querySnapshot}
			{#each querySnapshot.docs as activity, i}
				<a class="card p-4 card-hover flex flex-col" href={`/activities/${id[i]}`}>
					<img src="/fotomasutiles.png" alt="masutiles" class="pb-5 rounded-md" />
					<!-- <img src={downloadUrl(activity.data().name)} alt="masutiles" class="pb-5 rounded-md" /> -->
					<div class="h3 font-bold">
						{activity.data().name}
					</div>
					<!-- {#if activity.date != ''}
					<div>
						<strong>Date: </strong>{activity.date}
					</div>
					{/if} -->
					<div>
						<strong>Volunteer Positions: </strong>{activity.data().volunteerPositions}
					</div>
					<div>
						<strong>CSL Hours Awarded: </strong>{activity.data().hoursRewarded}
					</div>
				</a>
			{/each}
		{/await}
	</div>
</div>
