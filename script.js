const accesskey = "HPU1Yf9l94YYf2zqJPu0ESEISdSxtyl9wkl4NZFSfWA";
const searchform = document.getElementById("searchForm");
const searchbox = document.getElementById("searchBox");
const searchresult = document.getElementById("searchResult");
const showmorebtn = document.getElementById("showmoreBtn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchresult.innerHTML = "";
    }

    results.map((result) => {

        const image = document.createElement("img");
        image.src = result.urls.small;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    })

    showmorebtn.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages()
})

showmorebtn.addEventListener("click", () => {
    page++;
    searchImages();
})