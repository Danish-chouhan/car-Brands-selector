
    // input

    let inputColecter = document.getElementById("img1")
    let input = document.getElementById("inpt1")
    inputColecter.addEventListener("click", () => {
        if (input.textContent == "") {
            document.getElementById("check1").innerHTML = '<input type="checkbox" name="">Abarth'
            document.getElementById("check2").innerHTML = '<input type="checkbox" name="">Alfa Romeo'
            document.getElementById("check3").innerHTML = '<input type="checkbox" name="">Alpine'
            document.getElementById("check4").innerHTML = '<input type="checkbox" name="">Aston Martin'
            document.getElementById("check5").innerHTML = '<input type="checkbox" name="">Audo'
            document.getElementById("check6").innerHTML = '<input type="checkbox" name="">Bentley'
            document.getElementById("check7").innerHTML = '<input type="checkbox" name="">BMW'
        }
    })
    inputColecter.addEventListener("mousedown", () => {
        if (input.textContent == "") {
            document.getElementById("check1").innerHTML = ''
            document.getElementById("check2").innerHTML = ''
            document.getElementById("check3").innerHTML = ''
            document.getElementById("check4").innerHTML = ''
            document.getElementById("check5").innerHTML = ''
            document.getElementById("check6").innerHTML = ''
            document.getElementById("check7").innerHTML = ''
        }
    })
    // --------------------------------
    // checkbox checking
    let checking1 = document.getElementById("check1")
    checking1.addEventListener('click', () => {
        if (checking1.checked = true) {
            input.value = "Abarth"
        } else if (checking1.checked = true) {
            input.value = ""
        }
    })

    let checking2 = document.getElementById("check2")
    checking2.addEventListener('click', () => {
        if (checking2.checked = true) {
            input.value = "Alfa Romeo"
        }
    })
    let checking3 = document.getElementById("check3")
    checking3.addEventListener('click', () => {
        if (checking3.checked = true) {
            input.value = "Alpine"
        }
    })
    let checking4 = document.getElementById("check4")
    checking4.addEventListener('click', () => {
        if (checking4.checked = true) {
            input.value = "Aston Martin"
        }
    })
    let checking5 = document.getElementById("check5")
    checking5.addEventListener('click', () => {
        if (checking5.checked = true) {
            input.value = "Audi"
        }
    })
    let checking6 = document.getElementById("check6")
    checking6.addEventListener('click', () => {
        if (checking6.checked = true) {
            input.value = "Bentley"
        }
    })
    let checking7 = document.getElementById("check7")
    checking7.addEventListener('click', () => {
        if (checking7.checked = true) {
            input.value = "BMW"
        }
    })

    // --------------------------------

    // buttons

    // getSelectedValue

    let btn7 = document.getElementById("btn7")
    btn7.addEventListener('click', () => {
        if (input.value == "All") {
            document.getElementById("h1h").innerText = "Abarth,Alfa Romeo,Alpine,Aston"
            document.getElementById("h2h").innerText = "Martin,Audi,Bentley,BMW,Cadillac,Chevrolet,Citroen,Cupra,DACIA,DS,Farrari,Fiat,Ford,Honda,Infiniti,Jaguar,Jeep,KIA,Lamborghini,Land Rover,Lexus,Lotus,Maserati,Mazda,McLaren,Marcedes-Benz,MINI,Mitshubasi,Nisaan,Opel,Peugeot,Porsche,Renault,Rolls Royce,SEAT,Skoda,smart,Ssangyong,Subaru,Suzuki,Tesla,Toyota,Volkswagen,Volvo"
        } else if (input.value == "Lamborghini , Land Rover") {
            document.getElementById("h1h").innerText = "Lamborghini , Land Rover"
            document.getElementById("h2h").innerText = ""
        } else if (input.value == "") {
            document.getElementById("h1h").innerText = ""
            document.getElementById("h2h").innerText = ""
        }

    })
    // empty

    let btn1 = document.getElementById("btn1")
    btn1.addEventListener('click', () => {
        if (input.value == "" || input.value == "All" || input.value == "Lamborghini , Land Rover") {
            input.value = ""
        }
    })

    // setValueLambo

    let btn2 = document.getElementById("btn2")
    btn2.addEventListener('click', () => {
        if (input.value == "" || input.value == "All") {
            input.value = "Lamborghini , Land Rover"
        }
    })

    // setValueAll
    let btn3 = document.getElementById("btn3")
    btn3.addEventListener('click', () => {
        input.value = "All"
        checking1.innerHTML = '<input type="checkbox" name="" checked>Abarth'
        checking2.innerHTML = '<input type="checkbox" name="" checked>Alfa Romeo'
        checking3.innerHTML = '<input type="checkbox" name="" checked>Alpine'
        checking4.innerHTML = '<input type="checkbox" name="" checked>Aston Martin'
        checking5.innerHTML = '<input type="checkbox" name="" checked>Audo'
        checking6.innerHTML = '<input type="checkbox" name="" checked>Bentley'
        checking7.innerHTML = '<input type="checkbox" name="" checked>BMW'
    })
    btn3.addEventListener('mousedown', () => {
        if (input.value = "All") {
            input.value = "All"
            checking1.innerHTML = ''
            checking2.innerHTML = ''
            checking3.innerHTML = ''
            checking4.innerHTML = ''
            checking5.innerHTML = ''
            checking6.innerHTML = ''
            checking7.innerHTML = ''
        }
    })

    // enable
    let btn4 = document.getElementById("btn4")
    btn4.addEventListener('mousemove', () => {
        this.style.cursor = "url('./img/cursor.png')";
    })