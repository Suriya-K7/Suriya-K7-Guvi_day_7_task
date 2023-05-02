const req = new XMLHttpRequest();
      req.open("GET", "https://restcountries.com/v3.1/all");
      req.send();
      req.addEventListener("load", request);
      function request() {
        let data = JSON.parse(this.responseText);
        let asianCountries = data.filter((e) => {
          if (e.continents[0] == "Asia") {
            return e;
          }
        });
        let Population = data.filter((e) => {
          if (e.population < 200000) {
            return e;
          }
        });
        let totalPopulation = data
          .map((e) => {
            return e.population;
          })
          .reduce((acc, cur) => (acc += cur));
        console.log("All asian countries filter & logged below");
        console.log(asianCountries);
        console.log(
          "All countries with a population of less than 2 lakhs Filtered & logged below"
        );
        console.log(Population);
        console.log("All countries name, capital & flag logged below");
        data.forEach((e) => {
          console.log(`
Country Name : ${e.name.common},
Country Capital : ${e.capital},
Country flag : ${e.flag}

`);
        });
        console.log("total population logged below using reduse :");
        console.log(totalPopulation);
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