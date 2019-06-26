const input = document.querySelector("#input");
const areaJson = document.querySelector("#areaJson");
const errorTxt = "응답되는 주소가 없습니다."
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200 || xhr.status === 201) {
      areaJson.innerHTML = xhr.responseText
    } else {
      areaJson.innerHTML = errorTxt
    }
  }
};

var handleApiRequest = function(e) {
  if(e.keyCode === 13) {
    xhr.open('GET', 'https://api.github.com/users/'+input.value)
    xhr.send()
  }  
}

input.addEventListener("keyup", handleApiRequest);