const req = new XMLHttpRequest();
      req.open("GET", "https://restcountries.com/v3.1/all");
      req.send();
      req.addEventListener("load", request);
      function request() {
        let data = JSON.parse(this.responseText);
        // log - asian countries
        let asianCountries = data.filter((e) => {
          if (e.continents[0] == "Asia") {
            return e;
          }
        });
        console.log("All asian countries filter & logged below");
        console.log(asianCountries);
        // log - countries with less than 2 lakhs population
        let Population = data.filter((e) => {
          if (e.population < 200000) {
            return e;
          }
        });
        console.log("All countries with a population of less than 2 lakhs Filtered & logged below");
        console.log(Population);
        // log - all countries name, capital & flag using forEach
        console.log("All countries name, capital & flag logged below");
        data.forEach((e) => {
          console.log(`
Country Name : ${e.name.common},
Country Capital : ${e.capital},
Country flag : ${e.flag}

`);
        });
        // log - total population using reduse method
        let totalPopulation = data
          .map((e) => {
            return e.population;
          })
          .reduce((acc, cur) => (acc += cur));
        console.log("total population logged below using reduse :");
        console.log(totalPopulation);
        // log - countries using USD as currency
        console.log("countries using USD logged below :");
        let filteredCountryWithCurrencies=data.filter((e) => {
            if(e.currencies!=undefined){
                return e;
            }
        });
        filteredCountryWithCurrencies.forEach((e)=>{
            if(e.currencies.USD){
                console.log(e.name.common)
            }
        })
      }