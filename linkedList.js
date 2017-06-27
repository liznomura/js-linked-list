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

  function remove() {

  }

  function get() {

  }

  function insert() {

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