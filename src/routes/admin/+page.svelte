<script>
	import { auth } from '$lib/firebase';
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';

	let email = 'example@asfm.mx';
	let password = '';

	/**
	 * @type {any}
	 */
	let errorMessage;

	const signUp = async () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
			})
			.catch((error) => {
				const errorCode = error.code;
				errorMessage = error.message;
			});
	};
	const signIn = async () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				goto('/admin/dashboard');
			})
			.catch((error) => {
				const errorCode = error.code;
				errorMessage = error.message;
			});
	};
</script>

<div class="flex flex-col justify-center items-center">
	<div class="h-full flex flex-col justify-center items-center p-10 space-y-4 w-2/3">
		<div>
			<div class="h4 font-bold">Email:</div>
			<input class="input p-1 mt-2 w-full" type="email" bind:value={email} />
		</div>
		<div>
			<div class="h4 font-bold">Password:</div>
			<input class="input p-1 mt-2" type="password" bind:value={password} />
		</div>
		{#if errorMessage}
			<div>{errorMessage}</div>
		{/if}
		<button on:click={signUp} class="btn variant-outline-tertiary">Sign Up</button>
	</div>

	<div class="h-full flex flex-col justify-center items-center p-10 space-y-4 w-1/3">
		<div>
			<div class="h4 font-bold">Email:</div>
			<input class="input p-1 mt-2 variant-outline-primary" type="email" bind:value={email} />
		</div>
		<div>
			<div class="h4 font-bold">Password:</div>
			<input class="input p-1 mt-2" type="password" bind:value={password} />
		</div>
		{#if errorMessage}
			<div>{errorMessage}</div>
		{/if}
		<button on:click={signIn} class="btn variant-outline-primary">Sign In</button>
	</div>
</div>
