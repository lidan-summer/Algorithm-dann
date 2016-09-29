var arr=[2,3,1,8,0,5];
var temp=0;
function bubbleSort(arr) {
  for(var i=0; i<arr.length-1; i++){
    for(var j=0; j<arr.length-i; j++){
      if(arr[j]>arr[j+1]){
        temp=arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
    }
  }
}

bubbleSort(arr);
console.log(arr);