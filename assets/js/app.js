let cl = console.log;

const count = 50;
const apiKey = 'xloMzbEgalV5ABNMRl1jtD340RkBCHrYcS2PzlzEfiw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const data = document.getElementById("info")

// async function fetchapi(url) {
//     const res = await fetch(url);
//     return await res.json();
// }

fetch(apiUrl)
	.then(res => res.json())
	// .then(cl)
	.then(data =>{
		arr = data;
		templating(arr)
	})
	.catch(cl)

function templating(arr) {
    let result = "";
    arr.forEach(ele => {
        result +=`<div class="col-md-4 my-3">
        <div class="card bg-light">
            <div class="card-body">
                <div class="img">
                     <img src="${ele.urls.thumb}" alt="" class="img-fluid">
                </div>
                <div class="card-title my-1 text-center">
                    <span class="h5 mr-3"><i class="fas fa-thumbs-up"></i> ${ele.likes}</span>
                    <span class="h5 ml-2"><i class="fas fa-eye"></i> ${ele.views}</span>
                    <span class="h5 ml-2"><i class="fas fa-cloud-download"></i> ${ele.downloads}</span>
                </div>
            </div>        
        </div>
    </div>`
    });
    data.innerHTML = result;
}



