function correct() {
    console.log("corect");
    let wintext = document.getElementById("win");
    wintext.textContent = "Correct!"
    setTimeout(() => {
        wintext.textContent = ""
        alert("Correct!!!")

        let nls = document.getElementById("nl");
        nls.textContent = "Next Lesson?"
        nls.classList.add('active');
    }, 500);
}
function incorrect() {
    let nls = document.getElementById("nl");
    nls.textContent = ""
    nls.classList.remove('active');
    console.log("Incorrect");

    let failtxt = document.getElementById("fail");
    failtxt.textContent = "Incorrect."
    setTimeout(() => {
        failtxt.textContent = ""
        alert("Incorrect")

    }, 500);
}
function submit() {
    let input = document.getElementById("i");
    if (input.value == 'std::cout << "Hello, World!";') {
        console.log("corect");
        let wintext = document.getElementById("win");
        wintext.textContent = "Correct!"
        setTimeout(() => {
            wintext.textContent = ""
            alert("Correct!!!")

            let nls = document.getElementById("nl");
            nls.textContent = "Next Lesson?"
            nls.classList.add('active');
        }, 500);
    } else {
        let nls = document.getElementById("nl");
        nls.textContent = ""
        nls.classList.remove('active');
        console.log("Incorrect");
        let failtxt = document.getElementById("fail");
        failtxt.textContent = "Incorrect."
        setTimeout(() => {
            failtxt.textContent = ""
            alert("Incorrect")

        }, 500);
    }
}
function submit2() {
    let input = document.getElementById("i");
    if (input.value == 'Console.WriteLine("Hello, World!");') {
        console.log("corect");
        let wintext = document.getElementById("win");
        wintext.textContent = "Correct!"
        setTimeout(() => {
            wintext.textContent = ""
            alert("Correct!!!")

            let nls = document.getElementById("nl");
            nls.textContent = "Next Lesson?"
            nls.classList.add('active');
        }, 500);
    } else {
        let nls = document.getElementById("nl");
        nls.textContent = ""
        nls.classList.remove('active');
        console.log("Incorrect");
        let failtxt = document.getElementById("fail");
        failtxt.textContent = "Incorrect."
        setTimeout(() => {
            failtxt.textContent = ""
            alert("Incorrect")

        }, 500);
    }
}
