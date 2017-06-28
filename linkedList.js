/*jshint esversion:6*/
/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator() {


  let list = null;

  function getHead() {
    return list;
  }

  function getTail() {
    let currentNode = list;
    if(!currentNode) {
      return null;
    }
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function add(data) {

    let newNode = {
      value : data,
      next : null
    };

    let currentNode = list;

    //if empty list
    if(!currentNode) {
      list = newNode;
      return newNode;
    }

    //loop through all nodes and find the end
    //while there is another node
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    //once the end is found
    currentNode.next = newNode;
    return newNode;
  }

  function remove(n) {
    let count = 0;
    let currentNode = list;
    let previousNode = currentNode;
    let foundNode = false;

//if n = 0, assign currentNode.next to be list
if(n === 0) {
  list = currentNode.next;
}

//n < # of nodes....
//loop thru nodes while count < n
//store currentNode in another variable called previousNode
//move forward with currentNode = currentNode.next
//increment count with count++

//n > total nodes...
//if count < n && !currentNode.next
//return false

while(count < n && currentNode.next) {
  previousNode = currentNode;
  currentNode = currentNode.next;
  count++;
}

//when n = count, assign previousNode.next to currentNode.next
previousNode.next = currentNode.next;

if(count < n && !currentNode.next) {
  return foundNode;
}
}


function get(n) {
  let count = 0;
  let currentNode = list;

//n < # of nodes....
//loop thru nodes while count < n
//currentNode = currentNode.next
//count++
//when n = count, return currentNode
while(count < n) {
  currentNode = currentNode.next;
  count++;

//n > total nodes...
//if count < n && !currentNode.next
//return false

if(count < n && !currentNode.next) {
  return false;
}
}
return currentNode;
}

function insert(value, index) {
  console.log(index);
  let count = 0;
  let currentNode = list;
  let previousNode = currentNode;

  if(index === 0) {
    list = {value: value, next: list};
    return;
  }

  if(get(index) === false || index < 0) {
    return false;
  }

  while (count < index) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  previousNode.next = {value: value, next: currentNode};
}



return {
  getHead : getHead,
  getTail : getTail,
  add : add,
  remove : remove,
  get : get,
  insert : insert
};
}

// let ll = linkedListGenerator();
// console.log(ll.getHead()); //null
// ll.add("cat");
// console.log(ll.getHead()); //cat
// console.log(ll.getTail()); //cat
// ll.add("dog");
// console.log(ll.getTail()); //dog
// ll.insert("bird",1);
// console.log(ll.get(1)); //bird
// ll.remove(2);
// console.log(ll.getTail()); //bird