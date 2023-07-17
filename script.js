function myfun(){
      var name = document.getElementById('name').value;
      var lovename = document.getElementById('lovename').value;

      if(name == ""){
        alert('please write your name');
      }
      else if(name.length <=2){
        alert('minimum length is 3');
      }
      else if(lovename == ""){
        alert('please write your love name');
      }
      else if(lovename.length <=2){
        alert('minimum length is 3');
      }
      else if(!isNaN(name) || !isNaN(lovename)){
        alert('numbers are not alowed');
      }
      else{
        var value = Math.floor(Math.random()*100);
        document.getElementById('lovevalue').value = value + "%";
      }
  }