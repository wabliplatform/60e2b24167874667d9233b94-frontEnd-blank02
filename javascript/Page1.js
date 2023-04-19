let apiPostApi = new TempApi.PostApi();import TempApi from '../src/index';document.getElementById('ijtan').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Page2' ;}};window.onload = () => {apiPostApi.getAllpost((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iviko").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pimage']");
if(insideSubDataElement !== null && data[data.length -i -1].pimage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].pimage.data;
  insideSubDataElement.name = data[data.length -i -1].pimage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'pimage' && data[data.length -i -1].pimage !== undefined){
  subDataElements[i].src = data[data.length -i -1].pimage.data;
  subDataElements[i].name = data[data.length -i -1].pimage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ptitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].ptitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'ptitle'){
        subDataElements[i].textContent = data[data.length -i -1].ptitle;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ptext']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].ptext;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'ptext'){
        subDataElements[i].textContent = data[data.length -i -1].ptext;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};