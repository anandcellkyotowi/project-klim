var game = false;
document.getElementById('butt').onclick = function() {
    game = true;
    if (game) {
        document.getElementById('gameContainer').style.display = 'flex';
        document.getElementById('butt').style.display = 'none';
        const cubes = document.querySelectorAll('.cube')
        var score = document.querySelector('#score')
        var level = document.querySelector('#level')
        var levell = 0
        var cubeLimit = 5;
        var hits = 0
        var sucked = 0
        cubes.forEach((cube, index) => {
            cube.addEventListener('click', () => {
                checkWin(index)
                if (hits == cubeLimit) {
                    levell++
                    reset()
                }
                if (sucked == 4) {
                    cubeLimit = 5
                    levell = 0
                    alert('Дахин оролдох.')
                    reset()
                }
                console.log(cubeLimit)
            })
        });

        var randomIndexs = new Array()

        function randomizedWhiteCubes() {
            for (let i = 0; i < cubeLimit; i++) {
                let p = parseInt(Math.random() * 25)
                randomIndexs.push(p)
                cubes[p].style.backgroundColor = 'black'
            }

        }

        function reset() {
            randomIndexs = []
            cubeLimit++
            hideCubes()
            sucked = 0
            randomizedWhiteCubes()
            score.innerHTML = '0'
            hits = 0
            setTimeout(hideCubes, 1500);
            level.innerHTML = '' + levell
        }

        function hideCubes() {
            cubes.forEach((cube) => {
                cube.style.backgroundColor = 'rgb(87, 202, 255)'
            }, );
        }

        setTimeout(hideCubes, 1500);

        function checkWin(index) {
            let found = false
            for (let a = 0; a < randomIndexs.length; a++) {

                if (index == randomIndexs[a]) {
                    cubes[index].style.backgroundColor = 'white'
                    randomIndexs.splice(a, 1)
                    found = true
                    hits++
                    score.innerHTML = '' + hits
                }
            }
            if (!found) {
                cubes[index].style.backgroundColor = 'red';
                sucked++
            }

        }

        randomizedWhiteCubes()

    }
}