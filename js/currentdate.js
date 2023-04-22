const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numberic'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);