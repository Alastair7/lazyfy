<script>
  import { createEventDispatcher } from "svelte";

    export let direction;
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('click', direction);
    }
</script>
<button type="button" class="song-list-button" on:click={handleClick}>
    {#if direction === 'RIGHT'}
    >
    {:else}
    &lt;
    {/if}
</button>

<style>
    .song-list-button {
        background-color: rgb(216, 216, 216);;
        border-radius: 100%;
        min-height: 40px;;
        min-width: 40px;
        transition: 0.15s;
        margin: 10px;
    }

    button:hover {
        background-color: rgb(228, 228, 228);;
    }
</style>