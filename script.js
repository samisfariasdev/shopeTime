const searchWraper = document.querySelector('.search-input');
const inputBox = searchWraper.querySelector('input');
const SuggeBox = searchWraper.querySelector('.autocom');
const buttonBox = searchWraper.querySelector('.icon');
let linkTag = searchWraper.querySelector('a');

let webLink;
inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        buttonBox.onclick = () => {
            webLink = "https://es-la.facebook.com/marketplace/santacruzdelasierra/search?query=" + userData;
            linkTag.setAttribute('href', webLink)
            linkTag.click();

        }
        function tecla() {
            enter = event.keyCode;
            if (enter == 13) {
                webLink = "https://es-la.facebook.com/marketplace/santacruzdelasierra/search?query=" + userData;
                linkTag.setAttribute('href', webLink)
                linkTag.click();
    
            }
        }
        window.onkeydown = tecla;
        emptyArray = suggestions.filter((data) => {

            return
            data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());

        });
        emptyArray = emptyArray.map((data) => {

            return data = "<li>${data}</li>";

        });

        searchWraper.classList.add('active');
        showSuggestions(emptyArray);
        let allList = SuggeBox.querySelector("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");

        }
        {
            searchWraper.classList.remove("active");

        }

    }
    function select(element) {
        let selectData = element.textContent;
        inputBox.value = selectData;
        icon.onclick = () => {
            webLink = "https://es-la.facebook.com/marketplace/santacruzdelasierra/search/?q=" + buscarinput;
            linkTag.setAttribute('href', webLink)
            linkTag.click();
        }
        searchWraper.classList.remove('active');
    }
    function showSuggestions(List) {
        let listData;
        if (!list.length) {
            userValue = inputBox.value;
            listData = "<li>${userValue}</li>";


        } else {
            listData = list.join("")

        }
        SuggeBox.innerHTML = listData;

    }

}