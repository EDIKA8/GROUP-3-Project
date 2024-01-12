document.getElementById('rollBtn').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').textContent = 'You rolled: ' + dice;
});