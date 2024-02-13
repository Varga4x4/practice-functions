// Create a function behaving like a speed meter on the road. It will receive a speed of a car, allowed speed and tolerance in percentage. 
// It should return OK or TICKET depending on if car speed is within limit

const speedCamera = (actualSpeed, speedLimit, tolerance) => {
    const overSpeed = actualSpeed - speedLimit
    const allowedSpeeding = (speedLimit * tolerance) / 100

    if (overSpeed <= allowedSpeeding) {
        console.log("OK")
        return "OK"
    } else {
        console.log("TICKET")
        return "Ticket"
    }
}
speedCamera(100, 90, 10)