function validarForm(){
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let year = document.getElementById("year").value;


    if(name == ""){
        alert("Name es requerido")
        return false;
    }

    if(price == ""){
        alert("Precio es requerido")
        return false;
    }

    if(year == ""){
        alert("Fecha requerida")
        return false;
    }

    return true;
}

function showData(){
    let product_list;
    if(localStorage.getItem("product_list") == null){
        product_list = []
    }
    else{
        product_list = JSON.parse(localStorage.getItem("product_list"))
    }

    let html = "";

    product_list.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.price + "</td>";
        html += "<td>" + element.year + "</td>";
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button></td>';
        html +="</tr>";
    })

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
    if(validarForm() == true){
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let year = document.getElementById("year").value;

        let product_list;
        if(localStorage.getItem("product_list") == null){
        product_list = []
        }
        else{
        product_list = JSON.parse(localStorage.getItem("product_list"))
        }

        product_list.push({
            name : name,
            price : price,
            year : year,
        });

        localStorage.setItem("product_list", JSON.stringify(product_list));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("year").value = "";
    }
}


