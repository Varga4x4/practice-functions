// Create a function returning UP or DOWN or NULL depending from given temperature. The perfect temperature is 21, so if function receives 20, then should say UP, if 22 then it should say DOWN, if given 21 then should say NULL

const temperatureChecker = (temp) => {

    if (temp < 21) {
        console.log("UP")
    }

    if (temp > 21) {
        console.log("DOWN")
    }

    if (temp === 21) {
        console.log("NULL")
    }
}
temperatureChecker(21)