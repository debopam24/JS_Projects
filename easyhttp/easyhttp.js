function easyHTTP(){
    this.http = new XMLHttpRequest();
}
//Get Method
easyHTTP.prototype.get = function(url,callBack){
    this.http.open('GET',url,true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callBack(null,self.http.responseText);
        } else {
            callBack('Error: ' + self.http.status);
        }
    }
    this.http.send();
}
//Post Method
easyHTTP.prototype.post = function(url,data,callBack){
 this.http.open('POST',url,true);
 this.http.setRequestHeader('Content-type','application/json');
 let self = this;
    this.http.onload = function(){
            callBack(null,self.http.responseText);
    }
 this.http.send(JSON.stringify(data));
}
//Put Method
easyHTTP.prototype.put = function(url,data,callBack){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
       this.http.onload = function(){
               callBack(null,self.http.responseText);
       }
    this.http.send(JSON.stringify(data));
   }
   //Delete Method
   easyHTTP.prototype.delete = function(url,callBack){
    this.http.open('DELETE',url,true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callBack(null,'Post Deleted');
        } else {
            callBack('Error: ' + self.http.status);
        }
    }
    this.http.send();
}