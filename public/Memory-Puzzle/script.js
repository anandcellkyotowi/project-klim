//hi programmer go away or ill fuck your wife and kill your dog .|.

var game = false;

document.getElementById("butt").onclick = function() {
    document.getElementById("info").style.display = "none";
    game = true;
    if (game) {
        document.getElementById("gameContainer").style.display = "flex";
        document.getElementById("butt").style.display = "none";
        // document.querySelector(".info-text").style.bottom = "20vh";
        const cubes = document.querySelectorAll(".cube");
        var score = document.querySelector("#score");
        var level = document.querySelector("#level");
        var levell = 0;
        var cubeLimit = 5;
        var hits = 0;
        var sucked = 0;
        var witched = new Array()
        var playing = false;
        cubes.forEach((cube, index) => {
            cube.addEventListener("click", () => {
                if (playing) {
                    for (let x = 0; x < witched.length; x++) {
                        if (index == witched[x]) {
                            return 0
                        }
                    }
                    checkWin(index);
                    if (hits == jotaRO) {
                        levell++;
                        reset();
                    }
                    if (sucked == 1) {
                        cubeLimit = 4;
                        levell = 0;
                        alert("Дахин оролдоно уу.");
                        reset();
                    }
                }
            });
        });

        var randomIndexs = new Array();
        var jotaRO = 0;

        function randomizedWhiteCubes() {
            for (let i = 0; i < cubeLimit; i++) {
                let p = parseInt(Math.random() * cubes.length);
                randomIndexs.push(p);
            }
            for (let i = 0; i < randomIndexs.length; i++) {
                for (let a = i + 1; a < randomIndexs.length; a++) {
                    if (randomIndexs[i] == randomIndexs[a]) {
                        randomIndexs.splice(i, 1);
                    }
                }
            }
            for (let i = 0; i < randomIndexs.length; i++) {
                for (let a = i + 1; a < randomIndexs.length; a++) {
                    if (randomIndexs[i] == randomIndexs[a]) {
                        randomIndexs.splice(i, 1);
                    }
                }
            }
            jotaRO = randomIndexs.length;
            for (let a = 0; a < randomIndexs.length; a++) {
                cubes[randomIndexs[a]].style.backgroundColor = "black";
            }
            score.innerHTML = "" + hits + " / " + jotaRO;
        }

        function reset() {
            randomIndexs = [];
            cubeLimit++;
            hideCubes();
            sucked = 0;
            randomizedWhiteCubes();
            hits = 0;
            witched = []
            setTimeout(hideCubes, 1500);
            level.innerHTML = "" + levell;
            playing = false;
            score.innerHTML = "" + hits + " / " + jotaRO;
            gameEndCheck();
        }

        function hideCubes() {
            cubes.forEach((cube) => {
                cube.style.backgroundColor = "rgb(87, 202, 255)";
            });
            playing = true;
        }

        setTimeout(hideCubes, 1500);

        function checkWin(index) {
            let found = false;
            for (let a = 0; a < randomIndexs.length; a++) {
                if (index == randomIndexs[a]) {
                    cubes[index].style.backgroundColor = "white";
                    randomIndexs.splice(a, 1);
                    found = true;
                    hits++;
                    witched.push(index);
                    score.innerHTML = "" + hits + " / " + jotaRO;
                }
            }
            for (let a = 0; a < randomIndexs.length; a++) {
                if (randomIndexs[a] == index) {
                    randomIndexs.splice(a, 2);
                }
            }
            if (!found) {
                cubes[index].style.backgroundColor = "red";
                sucked++;
            }
        }

        function gameEndCheck() {
            if (levell == 11) {
                console.log(levell);
                alert("Чи яллаа.");
                cubeLimit = 4;
                levell = 0;
                reset();
            }
        }

        randomizedWhiteCubes();
    }
};