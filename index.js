const getjokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await res.json();
        // const joke = document.querySelector("#myJoke")
        // joke = data.value
        document.getElementById("myJoke").innerText = data.value;
    } catch (e) {

    }
}

window.addEventListener("load", () => {
    getjokes();
});