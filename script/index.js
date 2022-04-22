$(document).ready(() => {
    // Створюю таби
    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    // Калькулятор поки зроблений на одну дію, або якщо використовувати один той самий оператор декілька разів. Наприклад, 1+2, або 1*3*4.
    let text = "";
    
    const calc = () => {
        let arr = [];
        let result = null;
        if (text.includes("+")) {
            arr = text.split("+");
            for (let i = 0; i < arr.length; i++) {
                result += +arr[i];
                console.log(arr[i]);
            }
        }
        if (text.includes("-")) {
            arr = text.split("-");
            result = +arr[0]
            for (let i = 1; i < arr.length; i++) {
                result -= +arr[i] ;
            }
        }
        if (text.includes("/")) {
            arr = text.split("/");
            result = +arr[0];
            for (let i = 1; i < arr.length; i++) {
                result /= +arr[i];
            }
        }
        if (text.includes("*")) {
            arr = text.split("*");
            result = +arr[0];
            for (let i = 1; i < arr.length; i++) {
                result *= +arr[i];
            }
        } 
        return result;
    }

    $(".btn").click(function() {
        $(".result").empty();
        $(".window").append(`${$(this).text()}`);
        text = $(".window").text(); 
    });

    $(".btn-equal").click(function() {
        $(".window").text(``);
        $(".result").text(`${calc()}`);
    })
});