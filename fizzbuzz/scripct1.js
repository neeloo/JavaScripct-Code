const count = document.getElementById('count');
const print = document.getElementById('print');
const ul = document.getElementById('fizzbuzz');



/**
 * print the no from 1-N(n is noumber of item)
 * if n is divisable by 15 print  'fizzbuzz'
 * if n %3==0  print "fizz"
 * if n%5==0 print "bbuzz"
 * else print number
 */


print.onclick = function () {
    const start = Date.now();

    for (let i = 1; i <= count.value; i++) {
        if (i % 15 == 0) {
            // let li = document.createElement("li");
            // li.appendChild(document.createTextNode("fizzbuzz"));
            // ul.appendChild(li);

            // or write like that
            ul.innerHTML += "<li>fizzbuzz</li>";
        }
        else if (i % 3 == 0) {

            // let li = document.createElement("li");
            // li.appendChild(document.createTextNode("fizz"));
            // ul.appendChild(li);

            ul.innerHTML += "<li>fizz</li>";
        }
        else if (i % 5 == 0) {

            // let li = document.createElement("li");
            // li.appendChild(document.createTextNode("buzz"));
            // ul.appendChild(li);

            ul.innerHTML += "<li>buzz</li>";
        }
        else {

            // let li = document.createElement("li");
            // li.appendChild(document.createTextNode(i));
            // ul.appendChild(li);

            ul.innerHTML += "<li>" + i + "</li>";
        }
    };

    console.log('time =', Date.now() - start);

}



