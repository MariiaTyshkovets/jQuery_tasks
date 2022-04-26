$(document).ready(() => {
    // Створюю таби
    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    // Калькулятор поки зроблений на одну дію, або якщо використовувати один той самий оператор декілька разів. Наприклад, 1+2, або 1*3*4.
    let text = "";
    let lastBtnText = "";
    
    const calc = () => {
        if (operator(lastBtnText)) {
            $(".window").html(remove());
        }
        let result = eval(text); 
        $(".window").text('');
        return result;
    }

    const remove = () => {
        let arr = [];
        arr = text.split("");
        arr.pop();
        text = arr.join().replace(/,/g, '');
        return text;
    }

    const operator = (oper) => (oper == "*") || (oper == "+") || (oper == "-") || (oper =="/");

    $(".btn").click(function() {
        $(".result").empty();
        if (operator(lastBtnText) && operator($(this).text())) {
            $(".window").html(remove());
        }
        $(".window").append(`${$(this).text()}`);
        lastBtnText = $(this).text();
        text = $(".window").text(); 
    });

    $(".btn-equal").click(function() {
        $(".window").text('');
        $(".result").html(calc());
    });

    $(".btn-clear").click(function() {
        $(".window").text('');
        $(".result").empty();
    });

    $(".btn-remove").click(function() {
        $(".window").html(remove());
        $(".result").empty();
    });

    // Slick slider

    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    // AJAX

    const API = 'https://jsonplaceholder.typicode.com';

    fetch(`${API}/users`)
    .then(response => response.json())
    .then(users => {
        const container = document.getElementsByClassName('container')[0];
        const table = document.createElement('TABLE');
        const thead = document.createElement('THEAD');
        const tbody = document.createElement('TBODY');
        const userThemes = document.createElement('TR'); 
        container.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);
        thead.appendChild(userThemes);
        userThemes.innerHTML = "<th>id</th>" + "<th>name</th>" + "<th>username</th>" + "<th>email</th>" + "<th>citi</th>" + "<th>phone</th>" + "<th>website</th>" + "<th>company</th>";
        users.forEach(user => tbody.appendChild(getUsers(user)));
    })
    .catch(error => console.log(error));

    function getUsers(user) {
        const userPost = document.createElement('TR');
        const tdId = document.createElement('TD');
        const tdName = document.createElement('TD');
        const tdUsername = document.createElement('TD');
        const tdEmail = document.createElement('TD');
        const tdCity = document.createElement('TD');
        const tdPhone = document.createElement('TD');
        const tdWebsite = document.createElement('TD');
        const tdCompany = document.createElement('TD');

        tdId.innerText = user.id;
        tdName.innerText = user.name;
        tdUsername.innerText = user.username;
        tdEmail.innerText = user.email;
        tdCity.innerText = user.address.city;
        tdPhone.innerText = user.phone;
        tdWebsite.innerText = user.website;
        tdCompany.innerText = user.company.name;

        userPost.appendChild(tdId);
        userPost.appendChild(tdName);
        userPost.appendChild(tdUsername);
        userPost.appendChild(tdEmail);
        userPost.appendChild(tdCity);
        userPost.appendChild(tdPhone);
        userPost.appendChild(tdWebsite);
        userPost.appendChild(tdCompany);

        return userPost;
    }
});