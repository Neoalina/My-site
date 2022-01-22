function change() {
     if (document.getElementById('mainbackground').value=="red") {
       document.getElementById('site').classList = 'red';
     } else if (document.getElementById('mainbackground').value=="gray") {
        document.getElementById('site').classList='gray';
    } else if (document.getElementById('mainbackground').value=="blue") {
            document.getElementById('site').classList='blue';
    } else {
        document.getElementById('site').classList='standart';
    }
}