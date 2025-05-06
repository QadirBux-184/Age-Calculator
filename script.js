const optionDays = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',
    '16','17','17','18','19','20','21','22','23','24', '25','26','27','28','29','30','31'];


const optionMon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");
    const choice3 = document.getElementById("choice3");

    optionDays.forEach(ArrValue =>{
        const option = document.createElement("option");
        option.value = ArrValue;
        option.textContent = ArrValue;
        choice1.appendChild(option);
    });

    optionMon.forEach(mon =>{
        const option = document.createElement("option");
        option.value = mon;
        option.textContent = mon;
        choice2.appendChild(option);
    });

    //Calculate Age 
    function calculateAge(){
        const userDay = parseInt(choice1.value);
        const userMon = optionMon.indexOf(choice2.value) + 1;
        const userYear = parseInt(choice3.value);
    
        let newDate = new Date();
        let currDay = newDate.getDate();
        let currMon = newDate.getMonth() + 1;
        let currYear = newDate.getFullYear();
    
        // Validate input
        if (!userDay || !userMon || !userYear) {
            para.innerText = "Please select a valid date!";
            return;
        }
    
        // Calculate difference
        let day = currDay - userDay;
        let mon = currMon - userMon;
        let year = currYear - userYear;
    
        if (day < 0) {
            mon--;
            day += new Date(currYear, currMon - 1, 0).getDate(); // Previous month days
        }
    
        if (mon < 0) {
            year--;
            mon += 12;
        }
    
        para.innerText = `Your age is ${year} years, ${mon} months, and ${day} days.`;

        resetField();
    }

    function resetField(){
        choice1.value = "";
        choice2.value = "";
        choice3.value = "";
    }
    
    submit.addEventListener("click", calculateAge);
    