//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', ()=>{
    let date = document.querySelector('input').value
  
    fetch(`https://api.nasa.gov/planetary/apod?api_key=eMoK5KtSfosiWbeohle3sgKGx2ZqO0TPx68GftCf&date=${date}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data);
          if(data.media_type === "image"){
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
          }else if(data.media_type === "video"){
            document.querySelector('h2').innerText = data.title
            document.querySelector('iframe').src = data.url
            document.querySelector('h3').innerText = data.explanation
          }
  
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  })