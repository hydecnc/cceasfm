<script>
    /**
	 * @type {string}
	 */
     export let fieldName;
    /**
	 * @type {string}
	 */
     export let val;
</script>

<div class="w-full m-3">
    <div class="font-bold text-2xl mb-1">
        {fieldName}
    </div>
    <textarea bind:value={val} class="w-5/6 rounded h-48 text-black p-2"></textarea>
</div>