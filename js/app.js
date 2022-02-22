const loadData = () => {
    fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data => displayData(data));
};

loadData();

const displayData = countries => {
    const container = document.getElementById("container");
    countries.forEach(country => {
        const div = document.createElement("div");
        div.className = "box"
        const imageDiv = document.createElement("div");
        const img = document.createElement("img");
        const content = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const small = document.createElement("small");
        img.src = `${country.flags.png}`;
        imageDiv.appendChild(img);
        imageDiv.className = "imageDiv";
        content.className = "content"
        content.appendChild(h3);
        content.appendChild(p);
        content.appendChild(small);
        h3.innerText = country.name;
        p.innerText = `Capital: ${country.capital}`;
        small.innerText = `Population: ${country.population}`;
        div.appendChild(imageDiv);
        div.appendChild(content);
        container.appendChild(div);
        console.log(country);
    });
}