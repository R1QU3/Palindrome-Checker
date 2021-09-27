const btn = document.querySelector(".btn"),
result = document.querySelector(".result");

btn.addEventListener("click", () => {

    const word = document.querySelector(".input-word").value;

    if (word === "") {
        alert("Please type a word...")
    } else {
        let len = word.length;
        let start = word.substring(0, Math.floor(len/2)).toLowerCase();
        let end = word.substring(len - Math.floor(len/2)).toLowerCase();

        let flip = [...end].reverse().join("");
        if (start === flip) {
            result.innerHTML = `<p>${word.toUpperCase()}</br>is a palindrome</p>`;
            palindromeTrue()
        } else {
            result.innerHTML = `<p>${word.toUpperCase()}</br>is not a palindrome</p>`;
            palindromeFalse()
        }
    }
})

function palindromeTrue () {
    document.body.classList.add("palindromeTrue")
    document.body.classList.remove("palindromeFalse")
    document.body.style.background = "rgb(0, 160, 0)";
}
    
function palindromeFalse () {
    document.body.classList.add("palindromeFalse")
    document.body.classList.remove("palindromeTrue")
    document.body.style.background = "rgb(160, 0, 0)";
}
