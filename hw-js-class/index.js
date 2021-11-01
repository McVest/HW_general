// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.  


// клас Окружність
class Circumference {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return (`Радиус => ${(this.radius)}`);
    }

    setRadius(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return (`Диаметр => ${(2 * this.radius)}`);
    }
    areaOfaCircle() {
        return (`Площа => ${(Math.round(Math.PI * (this.radius ** 2)))}`);
    }
}
let radius = +prompt("Введите радиус круга.");

const cir = new Circumference(radius);
// поиск по ід
const circle1 = document.getElementById('js-btn-1');
const circle2 = document.getElementById('js-btn-2');
const circle3 = document.getElementById('js-btn-3');
const mark = document.getElementById('js-btn-4');

// Радіус
circle1.addEventListener('click', () => {
    alert(cir.getRadius());
});
// Діаметр
circle2.addEventListener('click', () => {
    alert(cir.getDiameter());
});
// площа
circle3.addEventListener('click', () => {
    alert(cir.areaOfaCircle());
});




// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов. 

// класс маркер
class Marker {
    constructor(color, amountOfInk) {
        this.color = color;
        this.amountOfInk = amountOfInk;
    }
    print(line) {
        let t = document.getElementById("content");
        let e = document.getElementById("content_error");
        for (let i = 0; i < line.length; i++) {
            if (this.amountOfInk != 0) {
                console.log(this.amountOfInk);
                if (line[i] == " ") {
                    this.amountOfInk += 0.5
                }
                t.innerHTML += line[i];
                t.style.color = this.color;
                this.amountOfInk -= 0.5;
            } else {
                e.innerHTML = "Marker is over";
                break;
            }

        }
    }
}
// доп класс маркер для оновлення маркера
class FilledMarker extends Marker {
    fill(amountOfInk) {
        if (amountOfInk > 100) {
            amountOfInk = 100;
        } else {
            this.amountOfInk += amountOfInk;
        }
    }
}
let marker = new FilledMarker("red", 10);
const l = `List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department`;
marker.print(l);
mark.addEventListener('click', () => {
    marker.fill(100);
    alert("Маркер полный!");
});


// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let body = document.getElementById('table_user'),
            tbl = document.createElement('table');
        tbl.style.width = '100px';
        tbl.style.border = '1px solid black';
        var row = tbl.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "Имя";
        cell2.innerHTML = "Фамилия";
        cell3.innerHTML = "Специальнсть";
        console.log(this.employees);
        for (var i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i].name);
            var row = tbl.insertRow(1);
            var userName = row.insertCell(0);
            var userPosition = row.insertCell(1);
            var userSalary = row.insertCell(2);
            userName.innerHTML = this.employees[i].name;
            userPosition.innerHTML = this.employees[i].position;
            userSalary.innerHTML = this.employees[i].salary;
        }
        body.append(tbl);
    }
}

const arrEmp = [
    new Employee("John", "Doe", "Manager",),
    new Employee("Bill", "Freeman", "Manager"),
    new Employee("Uno", "Dirck", "Manager"),
    new Employee("Erick", "Rapid", "Manager"),
    new Employee("Chris", "Rea", "Manager"),
    new Employee("Tommy", "Lee", "Manager"),
    new Employee("Jeck", "Ward", "DevOps Engineer")];
const empTable = new EmpTable(arrEmp);
empTable.getHtml();