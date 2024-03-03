<script>
    export let id;
    export let name;
    export let author;
</script>

        <div class = "song">
            <h1>Song {id}</h1>
            <p class ="song-name">{name}</p>
            <p class = "song-author">{author}</p>
        </div>

<style>
    .song {
        margin: auto;
        width:fit-content;
        min-width: 250px;
        padding: 10px;
        margin: 5px;
        background-color: rgb(36, 36, 55);
    }

    h1 {
        color: #41d8bf;
        text-align: center;
        margin-top: 0;
    }

    .song-name{
        color: #2f89b3;
        font-size: 1.2em;
        text-align: center;
        margin-bottom: 5px;
    }

    .song-author {
        color: #ececec;
        margin-top: 0;
        text-align: center;
        margin-bottom: 5px;
    }
</style>