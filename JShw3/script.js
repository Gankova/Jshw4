function showCountries(country) {
    const tbody = document.querySelector('#country>tbody')
    tbody.innerHTML="";

    for (let count of country){
        const tr =document.createElement('tr');

        const tdCountry = document.createElement('td');
        tdCountry.innerText = count.name;

        const tdPopulation = document.createElement('td');
        tdPopulation.innerText = count.population;

        const tdFlag = document.createElement('td');
        
        
        tdFlag.innerHTML = count.flag;


        const tdTimezones = document.createElement('td');
        tdTimezones.innerText =  count.timezones;

        tr.append(tdCountry, tdPopulation, tdFlag, tdTimezones );
        tbody.appendChild(tr)
        console.log(count.name);

    }
}

async function getCountry(){
    const resp = await fetch ('https://restcountries.eu/rest/v2/all');
    const country = await resp.json();
    
    console.log(country)

    //const table = document.getElementById('count');
    //console.log(country)
    
    showCountries(country);

   /* const text =prompt('Enter the Country')
    for(let count2 of country){
        if (text == count2.name){
            tdCountry.innerText = count2.name;
            tdPopulation.innerText = count2.population;
            tdFlag.innerHTML = count2.flag;
            tdTimezones.innerText =  count2.timezones;
            break;
        }
    }*/
}
getCountry();
async function enterCountry(){
    const text = await prompt('Enter the Country');
    const resp1 = await fetch (`https://restcountries.eu/rest/v2/name/${text}`);
    const country1 = await resp1.json();

    showCountries(country1);


}
