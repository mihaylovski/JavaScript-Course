// How I did the assignment.

const task3Element = document.getElementById('task-3');

function noParam() {
    alert('(funtion 1) no parameter function starting in the beggining and on click on number 3');
}

noParam();

task3Element.addEventListener('click', noParam);

function greetingUser(meme) {
    var meme = 'Meme';
    alert('(funtion 2) Hello my dear ' + meme);
    
}

greetingUser;

function treeStrings(firstElement, secondElement, thirdElement,fourtElement) {
    var firstElement = '(funtion 2)\n Hi, my name is what?\n';
    var secondElement = 'Hi, my name is who?\n';
    var thirdElement = 'Hi, my name is chika - chicka.\n';
    var fourtElement = 'Slim Shady';
    return firstElement + secondElement + thirdElement + fourtElement;
}

alert(treeStrings());

// How the teacher did it.

/*

const task3Element = document.getElementById('task-3');
function greet() {
    alert('Hi there!');
}

function greetUser(userName) {
    alert('Hi' + userName)
}

function combine(str1, str2, str3) {
    const combinedText = `${str1} ${str2} "{str3}`;
    return combinedText;
}

greetUser('Max');

task3Element.addEventListener('click', greet);

const combineString = combine('Hi' + 'there' + '!');
alert(combineString);

*/