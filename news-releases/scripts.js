const yearDropdown = document.getElementById("yearDropdown")
const container = document.getElementById("container")

var base = "https://www.berkshirehathaway.com/news/"

function formatDate(dateString) {
    const date = new Date(dateString);
    const monthShort = date.toLocaleString('default', { month: 'short' }).toLowerCase();
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${monthShort}${day}${year}`;
}

yearDropdown.addEventListener("change", () => {
    let yearSelected = yearDropdown.value;
    if (yearDropdown.value === "Pre 2001") {
        yearSelected = "pre"
    }
    container.innerHTML = ""
    fetch("../json/news.json")
        .then(response => response.json())
        .then(data => {
            for (let year in data[yearSelected]) {
                let formattedDate = formatDate(data[yearSelected][year].date)
                let item = `<div class="newsItem">
                    <div class="newsItemHeadline">
                    <span>${data[yearSelected][year].headline}</span>
                    <span>${data[yearSelected][year].date}</span>
                    </div>
                    <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
        c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
        C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
        C255,161.018,253.42,157.202,250.606,154.389z"/>
    </svg>
                </div>`
                container.insertAdjacentHTML("beforeend", item)

                const newsItem = container.lastElementChild;

                newsItem.addEventListener("click", async() => {
                    // console.log("Release item clicked:", data.releases[release]);

                    window.location.href = base + formattedDate + ".pdf";
                });
            }


        })
})