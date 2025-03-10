async function main() {
    while (true) {
        try{
      let code = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
  
      let response = await fetch("https://www.gimkit.com/api/matchmaker/find-info-from-code", {
  
        "headers": {
  
          "accept": "application/json, text/plain, /",
  
          "accept-language": "en-US,en;q=0.9",
  
          "content-type": "application/json",
  
          "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
  
          "sec-ch-ua-mobile": "?0",
  
          "sec-ch-ua-platform": "\"Windows\"",
  
          "sec-fetch-dest": "empty",
  
          "sec-fetch-mode": "cors",
  
          "sec-fetch-site": "same-origin"
  
        },
  
        "referrer": "https://www.gimkit.com/join/",
  
        "referrerPolicy": "strict-origin-when-cross-origin",
  
        "body": `{"code":"${code}"}`,
  
        "method": "POST",
  
        "mode": "cors",
  
        "credentials": "include"
      });
  
  
      if (!response.ok) {
        
        console.log(code + ", " + response.status + ", failed!");
        throw new Error(response.status);
  
      } else {

        alert(code);
          for (let i = 0;i < document.getElementsByClassName("sc-eDWCr iVNPcC").length;i++){
              item = document.getElementsByClassName("sc-eDWCr iVNPcC")[i];
              if (item.getAttribute("placeholder") == "Game Code"){
                  item.setAttribute("value", code);
              }
          }
        break;

      }
      }catch (error){
        if (error.toString().includes("429")){
            alert("Too many requests! Please try again later.")
            break;
        }
      }
    }
  }
  
  main()
