let apiPostApi = new TempApi.PostApi();import TempApi from '../src/index';let post = new TempApi.Post();document.getElementById('iz7r9').onclick = (event) => {
    event.preventDefault();
    post['ptitle'] = document.querySelector("[annotationname = 'ptitle']").value;post['ptext'] = document.querySelector("[annotationname = 'ptext']").value;post['pimage'] = {
        data: document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pimage']").src,
        name: document.querySelector("[annotationname = 'pimage']").getAttribute("name")
      };
      apiPostApi.createpost( post, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/Page1' ;}}});};window.onload = () => {};