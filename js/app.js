function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById('random-btn').addEventListener('click', function () {
    document.getElementById('pin-display').value = generateRandomNumber(1000, 9999);
});

document.getElementById('input-number').addEventListener('click', function (event) {
    const previous = document.getElementById('display-input');
    let newInput = event.target.innerText;
    if (newInput == 'C') {
        previous.value = '';
    }
    else if (newInput == '<') {
        prevLength = previous.value.length;
        previous.value = previous.value.substring(0, prevLength - 1);
    }
    else {
        newInput = previous.value + newInput;
        previous.value = newInput;
    }
});

let count = 3;

function init() {
    const text = count + " try left";
    document.getElementById('chances-left').value = text;
    document.getElementById('pin-display').value = '';
}
init();

document.getElementById('submit-btn').addEventListener('click', function () {
    const genValue = document.getElementById('pin-display').value;
    const inputValue = document.getElementById('display-input').value;
    const leftChances = document.getElementById('chances-left').value;
    console.log(leftChances);

    const notifyCross = document.getElementById('notify-cross');
    const notifyRight = document.getElementById('notify-right');
    const notifyLimit = document.getElementById('notify-limit');

    if (genValue == inputValue) {
        notifyCross.style.display = 'none';
        notifyLimit.style.display = 'none';
        notifyRight.style.display = 'block';
    }
    else {
        count--;
        const text = count + " try left";
        document.getElementById('chances-left').value = text;
        notifyCross.style.display = 'block';
        notifyRight.style.display = 'none';
        document.getElementById('display-input').value = '';

        if (count === 0) {
            document.getElementById('submit-btn').setAttribute('disabled', 'true');
            document.getElementById('pin-display').value = '';
            notifyCross.style.display = 'none';
            notifyLimit.style.display = 'block';
        }
    }
});