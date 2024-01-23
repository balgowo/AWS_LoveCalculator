function calculate() {

    let yourName = document.getElementById('yourName').value;
    let crushName = document.getElementById('crushName').value;
    const onlyCharactersRegex = /^[a-zA-Z]+$/;
    
    if (yourName && crushName && onlyCharactersRegex.test(yourName) && onlyCharactersRegex.test(crushName)) {
        console.log("Your Name:", yourName);
        console.log("Crush's Name:", crushName);
        let loveScore = Math.floor(Math.random() * 100 + 1);
        let loveScoreDisp = loveScore + "%";
        let scoreInterpretation = ""

        if (loveScore >= 0 && loveScore <= 20) {
            scoreInterpretation = "Mahina 'pre. Mag do muna kayo ng things na magpapa spark sa inyo :>";
        } else if (loveScore > 20 && loveScore <= 40) {
            scoreInterpretation = "Meron nang potensyal, pero kailangan pa ng upgrade, bes!";
        } else if (loveScore > 40 && loveScore <= 60) {
            scoreInterpretation = "Mukhang may laban na, beshie! G na G!";
        } else if (loveScore > 60 && loveScore <= 80) {
            scoreInterpretation = "Ang lupit ng pagmamahalan niyo! Ipagpatuloy niyo lang 'yan!";
        } else {
            scoreInterpretation = "SANA ALL! MAGPAKASAL NA KAYO!";
        }

        console.log(loveScore);
        document.getElementById("resLoveScoreDisp").innerHTML = loveScoreDisp;
        document.getElementById("scoreInterpretationResult").innerHTML = scoreInterpretation;
    } else if ((yourName && crushName && !onlyCharactersRegex.test(yourName) && !onlyCharactersRegex.test(crushName))||(yourName && crushName && onlyCharactersRegex.test(yourName) && !onlyCharactersRegex.test(crushName))||(yourName && crushName && !onlyCharactersRegex.test(yourName) && onlyCharactersRegex.test(crushName))){
        alert("Names must only include characters from the English Alphabet");
    }else {
        alert("Please enter both your name and your crush's name.");
    }
}