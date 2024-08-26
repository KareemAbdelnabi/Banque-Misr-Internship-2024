function checkScoreIf(score) {
    let result = '';
    if (typeof score !== 'number' || isNaN(score)) {
        result = 'Not a Number';
    } else if (score > 100 || score < 0) {
        result = 'Invalid Score';
    } else if (score === 100) {
        result = 'Perfect Score';
    } else if (score >= 85) {
        result = 'You got an A';
    } else if (score >= 75) {
        result = 'You got a B';
    } else if (score >= 65) {
        result = 'You got a C';
    } else if (score >= 50) {
        result = 'You got a D';
    } else {
        result = 'You got an F';
    }
    document.getElementById("ifResult").innerText = result;
}

function checkScoreSwitch(score) {
    let result = '';
    if (typeof score !== 'number' || isNaN(score)) {
        result = 'Not a Number';
        document.getElementById("switchResult").innerText = result;
        return;
    }

    switch (true) {
        case (score > 100 || score < 0):
            result = 'Invalid Score';
            break;
        case (score === 100):
            result = 'Perfect Score';
            break;
        case (score >= 85):
            result = 'You got an A';
            break;
        case (score >= 75):
            result = 'You got a B';
            break;
        case (score >= 65):
            result = 'You got a C';
            break;
        case (score >= 50):
            result = 'You got a D';
            break;
        default:
            result = 'You got an F';
            break;
    }
    document.getElementById("switchResult").innerText = result;
}

function processScore() {
    let score = parseFloat(document.getElementById("scoreInput").value);
    
    checkScoreIf(score);
    checkScoreSwitch(score);
}
