function adjacentElementsProduct(inputArray)
{ 
     var pro = inputArray[0] * inputArray[1];
  
	for(var i = 1; i < inputArray.length-1; i++)
	{
     if(inputArray[i]*inputArray[i+1] >= pro)
       {
          pro = inputArray[i]*inputArray[i+1];
       }
	}	
  return pro;
}
document.write(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));