(function() {

var interests = [
'Math',
'Life sciences',
'Development economics',
'Education policy',
'Digital rights (not DRM!)',
'Freedom of expression',
'Urban development',
'Rebuilding suburbia',
'Financial literacy'
];

var curiosity = interests[Math.floor(Math.random() * interests.length)];

document.getElementById("curiosity-s").innerHTML = '<p>' + '<a href=".">' + curiosity + '</a>' + '</p>';

})();