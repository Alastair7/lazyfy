<script>
    import SongWrapper from "../lib/components/SongWrapper.svelte";
    import SongListScrollButton from "../lib/components/SongListScrollButton.svelte";

    let songs = [{
        id: 1,
        name: "Wake Up",
        author: "EDEN"
    }, 
    {
    id: 2,
    name: "Frame of Mind", 
    author: "Tristam"
    },
    {
    id: 3,
    name: "Islandia", 
    author: "Zetazen"
    },
    {
    id: 4,
    name: "Lealtad", 
    author: "Zetazen"
    },
    {
    id: 5,
    name: "Standing", 
    author: "STIM"
    },
    {
    id: 6,
    name: "You killed me on the moon", 
    author: "BLOW"
    },
    {
    id: 7,
    name: "Sci-Fi", 
    author: "EDEN"
    }];

    let startIndex = 0;

    function handleScrollButtonClick(event) {
        const {direction} = event.detail;

        if (direction === 'RIGHT') {
            startIndex = Math.min(startIndex + 4, songs.length -4);
        } else {
            startIndex = Math.max(startIndex - 4, 0);
        }
    }
</script>

<h1>LAZYFY</h1>
<h2>Share recently Spotify songs with anyone.</h2>
<div class = box>
    <div class = "arrow-wrapper">
        <SongListScrollButton direction="LEFT" />
    </div>
    <div class = "song-list">
        {#each songs.slice(startIndex,startIndex + 4) as song (song.id)}
        <SongWrapper {...song} />
        {/each}
    </div>
    <div class = "arrow-wrapper">
        <SongListScrollButton direction="RIGHT" />
    </div>
</div>

<style>
    h1, h2 {
        text-align: center;
    }

    .song-list {
        border: 2px solid green;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .arrow-wrapper {
        margin: auto;;
        border: 1px solid red;
    }
    .box {
        display:flex;
        align-items: center;;
        justify-content: center;
        border: 1px solid rgb(0, 252, 63);
        margin: auto;
        text-align: center;;
        background-color: rgb(218, 218, 218);
    }
</style>

