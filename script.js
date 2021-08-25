
var main = document.createElement('div');
main.innerHTML = ` <nav class="navigation"><h1>The Details of Breweries</h1></nav>
`;
document.body.append(main);

// fetching data 

async function brew() {
      const data= await fetch("https://api.openbrewerydb.org/breweries");
     const datai = await data.json();
    datai.forEach((dataj) => createBrew(dataj));
}
    
brew();

// creating breweries
function createBrew({ name, brewery_type, website_url, phone }) {


    var brewinfo = document.createElement('div');
    brewinfo.innerHTML =
       `
     <div class="brew-info" >
<h3 class="name">Name : ${name} </h3>
<p><b>Type of brewries : </b>${brewery_type}</p>
<hr class="line" width="fit-content">
<p><a href=${website_url}>${website_url}</a></p>
<hr class="line" width="fit-content">
<p><b>mobile :</b> ${phone} </p>
</div>
 
`;
    container.append(brewinfo);

}
    var container = document.createElement('div');
container.setAttribute('class', 'container');
        document.body.append(container);
