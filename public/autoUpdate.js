async function update() {

    const res = await fetch('/api/music')
    const data = await res.json()

    var check = $('#track-name').text()
    if (check == `${data.track.name} by ${data.artist}`) return

    if(data.track.name != 'undefined') {
        $('#track-name').text(`${data.track.name} by ${data.artist}`)
    }

    if (check == 'Loading...') return

    // wait for audio to load
    setTimeout(() => {
        document.getElementById('audio').contentWindow.location.reload(true);
    }, 1000)
}

update()
setInterval(update, 10000)