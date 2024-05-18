const releases = document.getElementById("releases")
const specials = document.getElementById("specials")
const miscs = document.getElementById("miscs")

fetch("json/content.json")
    .then(response => response.json())
    .then(data => {
        for (let release in data["releases"]) {
            let item = `<div class="releaseItem">
                <div class="releaseItemHeadline">
                    <span>${data["releases"][release].headline}</span>
                    <span>${data["releases"][release].date}</span>
                </div>
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>
            </div>`
            releases.insertAdjacentHTML("beforeend", item)

            const releaseItem = releases.lastElementChild;

            releaseItem.addEventListener("click", () => {
                console.log("Release item clicked:", data.releases[release]);
                window.location.href += data.releases[release].redirect.replace("/", "");
            });
        }
        for (let special in data["specials"]) {
            let item = `<div class="releaseItem">
                <div class="releaseItemHeadline">
                    <span>${data["specials"][special].headline}</span>
                    <span>${data["specials"][special].date}</span>
                </div>
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>
            </div>`
            specials.insertAdjacentHTML("beforeend", item)

            const specialItem = specials.lastElementChild;

            specialItem.addEventListener("click", () => {
                console.log("Release item clicked:", data.specials[special]);
                window.location.href = data.specials[special].redirect;
            });
        }
        for (let misc in data["misc"]) {
            let item = `<div class="releaseItem">
                <div class="releaseItemHeadline">
                    <span>${data["misc"][misc].headline}</span>
                    <span>${data["misc"][misc].date}</span>
                </div>
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
</svg>
            </div>`
            miscs.insertAdjacentHTML("beforeend", item)

            const miscItem = miscs.lastElementChild;

            miscItem.addEventListener("click", () => {
                console.log("Release item clicked:", data.misc[misc]);
                // window.location.href = data.misc[misc].redirect;
            });
        }
    }
    )