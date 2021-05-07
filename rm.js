if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}

const er = []
const kll = []
var dt = new Date();
var strt = ((("0"+dt.getDate()).slice(-2)) +"-"+ ("0"+(dt.getMonth()+1)).slice(-2)) +"-"+ (dt.getFullYear())
var url =`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=049&date=${strt}`
fetch(url)
.then(re=>re.json())
.then(list=>{
	list.centers.forEach(opp=>{
		er.push({name:opp.name,sess:opp.sessions.filter(io=>io.min_age_limit != 45)})
		})
		var sm = []
		er.forEach(ind=>{
			if(ind.sess != 0){
				sm.push(ind)
			} 
			
		})
		console.log("sm",sm)
		//console.log("er",er)
	if(sm.length != 0){
		sm.forEach(item=>{
			var node = document.createElement("LI");                 // Create a <li> node
			var xm = document.createElement("SPAN");
			xm.className = "badge badge-primary badge-pill"
			node.className = "list-group-item d-flex justify-content-between align-items-center"
			var txt2 = document.createTextNode(item.sess.length)
			var textnode = document.createTextNode(item.name);// Create a text node
			node.appendChild(textnode);                              // Append the text to <li>
			xm.appendChild(txt2)
			node.appendChild(xm)
			/* item.sess.forEach(inst=>{
				var break1 = document.createElement("BR")
				node.appendChild(break1)
				var h7 = document.createElement("H7")
				var h7text = document.createTextNode(inst.date)
				h7.appendChild(h7text)
				node.appendChild(h7)
				
			}) */
			document.getElementById("myList").appendChild(node);
			
		})
		}else{
			var h4 = document.createElement("H4");                
			h4.className = "novac1"
			var newtt = document.createTextNode("No vaccination sites are available")
			h4.appendChild(newtt)
			document.getElementById("novac_div").appendChild(h4);
		}
})
var btn1 = document.getElementById("btn1")
btn1.onclick = (e) => {
  const myNode = document.getElementById("myList");
  const klat = document.getElementById("novac_div")
  klat.innerHTML = ""
  myNode.innerHTML = ''

  fetch(url)
  .then(re=>re.json())
  .then(list=>{
	list.centers.forEach(opp=>{
		kll.push({name:opp.name,sess:opp.sessions.filter(io=>io.min_age_limit != 45 & io.available_capacity !== 0)})
		})
		//console.log(er)
		var trm = []
		kll.forEach(ind=>{
			if(ind.sess != 0){
				trm.push(ind)
			} 
			
		})

	//console.log(trm)
	if(trm.length !=0 ){
		trm.forEach(item=>{
			var node = document.createElement("LI");                 // Create a <li> node
			var xm = document.createElement("SPAN");
			xm.className = "badge badge-primary badge-pill"
			node.className = "list-group-item d-flex justify-content-between align-items-center"
			var txt2 = document.createTextNode(item.sess.length)
			var textnode = document.createTextNode(item.name);         // Create a text node
			node.appendChild(textnode);                              // Append the text to <li>
			xm.appendChild(txt2)
			node.appendChild(xm)
			document.getElementById("myList").appendChild(node);
		})
		btn1.disabled = true

	}else{
		
		var h4 = document.createElement("H4");                
			h4.className = "novac1"
			var newtt = document.createTextNode("No active vaccine sites are available")
			h4.appendChild(newtt)
			document.getElementById("novac_div").appendChild(h4);
		
	}

})
  
  
  
  
}

