const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.querySelector("button");
const output = document.getElementById("num3");

function add(num1, num2){
    let ans = num1 + num2;
    return ans
}

button.addEventListener("click", function() {
    let ans = add(input1.value, input2.value);
    output.value = ans;
    console.log(ans);
});

