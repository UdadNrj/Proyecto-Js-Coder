        // Array de productos
        const products = [
            {
                name: "Lamborghini",
                image: "https://cdn.carbuzz.com/gallery-images/1600/583000/600/583645.jpg",
                price: 1000000
            },
            {
                name: "Alfa Romeo",
                image: "https://noticias.coches.com/wp-content/uploads/2023/08/Alfa-Romeo-33-Stradale-2024-46.jpeg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
            {
                name: "Alpharomeo",
                image: "https://soymotor.com/sites/default/files/2023-08/alfa-romeo-33-stradale-exterior-1-soymotor.jpg",
                price: 1000000
            },
        ];

        const productsContainer = document.getElementById("productsContainer");

        products.forEach(product => {
            const productDiv = document.createElement("div");
            const productName = document.createElement("h2");
            const productImage = document.createElement("img");
            const productPrice = document.createElement("p");

            productName.textContent = product.name;
            productImage.src = product.image;
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            productDiv.appendChild(productName);
            productDiv.appendChild(productImage);
            productDiv.appendChild(productPrice);
            productsContainer.appendChild(productDiv);
        });
let operacion = prompt("Que operacion quiere hacer, suma, resta, division, Concatenacion, porcentajes");
console.log(operacion)
if (operacion == "suma"){
    let n1 = Number(prompt("Dijite un numero"))
    let n2 = Number(prompt ("Dijete nuevamente un numero"))
    function suma(a, b) {
        return a + b;
    }
    var resultadoSuma = suma(n1, n2);
    alert(resultadoSuma)
} else if (operacion == "resta"){
    let n1 = Number(prompt("Dijite un numero"))
    let n2 = Number(prompt("Dijite nuevamente un numero"))
    function resta(a, b){
        return a - b;
    }
    var resultadoresta = resta(n1, n2)
    alert(resultadoresta)
}
  else if (operacion == "division"){
    let n1 = Number(prompt("Dijite un numero"))
    let n2 = Number(prompt("Dijite nuevamente un numero"))
    function division(a, b){
        return a - b;
    }
    var resultadodivision = division(n1, n2)
    alert(resultadodivision)
}