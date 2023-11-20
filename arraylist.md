# ArrayList

* Dynamic array in Java
* Does not use a linked list
* Instead, uses a static array
  * When the array's size is not enough, creates a new array and copies itself to it.
  * Does the same when there is no space.

* In other words, when we try to add to ArrayList and there is no space, a new array is created and the contents are copied into the new array.
* What should be the size of the new array?

---

# Creating a new array

* When we need to resize, we may choose to create an array of $size*2$. 
  * This is an efficient strategy for large lists.
* We can also increase the size of the array by a constant amount.
  * Although it seems more memory efficient, it can lead to frequent resizing as the list grows.
* We can also use an *hybrid strategy*. 
  * For smaller arrays, we can double the size.
  * For larger arrays, a smaller growth factor or fixed increment can be used.
  * By this, we try to balance memory efficiency and performance.

* When we implement our own, just use the double method.

---


# ArrayList

* add(int elm) : void
  * Adds an element to end of the arrayList 
* get(int idx) : int
  * Gets (reads) an element from the arrayList for the given index
* remove(int index) : int
  * Removes an element of an index
* size() : void
  * Gives the size of the arraylist
* resize() : void
  * Create a separate function for resizing. Do not write resizing code in the `add()` part.

---

# Implementation

* Let's see the implementation in Java.
```java
ArrayList<Integer> al = new ArrayList<Integer>();
al.add(4);
int x = al.get(0);
System.out.println(x);
```

* Remember, by clicking on `.` we can see how many different methods we can call. 
* However, in this class we are going to implement the following:
  * add, get, remove and size.

* When coding, please check for errors. For example, the index for the `remove()` and `get()` must be valid.

--- 

# Iterators

* Iterators are used to provide a standardized way of accessing and traversing elements in a collection such as lists, sets, or maps.
* We use it because we can abstract the process of traversing a collection.
  * We can use it for every type of collection without needing to know the internal structure.
  * Can prevent some common errors such as *off-by-one* errors.

---
# Why use them?

* Commonly used to loop through objects of a collection, read them and remove them.
* It creates an abstraction from internal implementation. You just call the method and don't care how it works.
* When you implement this interface and write the method, it will work as you want.
  * You can use it for any type of collection in Java built-in.
  
However, there are stuff you cannot do with iterators.

* You cannot go backward.
* You cannot add a new element.
* You cannot update an element.
* You cannot use them on arrays.
* 


---

# Iterators

Let's create an ArrayList (built-in Java version) and see the iterator at work.
```java
ArrayList<String> wizards = new ArrayList<String>();
wizards.add("Harry");
wizards.add("Ron");
wizards.add("Hermione");

Iterator<String> iterator = wizard.iterator();
while(iterator.hasNext()) {
    String wizard = iterator.next();
    System.out.println(wizard);
    if(wizard.equals("Ron")) {
        iterator.remove();
    }
}
System.out.println("After removal :" + wizards);
```

---

# Iterator

Iterator is an **interface**. Which means we can **implement** it. When we try to implement an interface to our own implementation, it will tell us to implement the methods specific to it. 

Those are `hasNext()` and `next()`. One can also change the interface and put `remove()` there also. 

If you want to implement these methods, then you need to fill them in. Remember, this is an interface. It is not going to give us the details of the methods, they are up to us how to write it. However, if you are **implementing** that interface, that means you have to implement **some** methods as well.

Here, the methods we need to implement are as told previously. 

```java
int currentIndex = 0; 
public boolean hasNext() {
    return currentIndex < size;
}

public E next() {
    if (!hasNext()) {
        //error
    }
    return (E) elements[currentIndex++];
}
//here E is a generic. We use generics so that we don't have to create different classes for different data types.
//So, if you put int instead of E, it is going to return an int. 
```

---

# Fun fact

* When we try to print out an $array$, it gives us the address instead of what is inside. 
* However, when we try to print an ArrayList, it gives us the array!
  * The reason is, everytime we call the `sysout`, it actually calls out a method `toString()`.
  * When we implement our own methods, if we want to see the result like it does in the arrayList, we need to override the `toString()` method.

* For example, in our own implementation we can say:

```java
public String toString(){
    StringBuilder sb = new StringBuilder();
    sb.append("[");
    for(int i=0;i<size;i++){
        sb.append(String.valueOf(elements[i]).toString());
        if(i < size-1) {
            sb.append(", ");
        } 
        sb.append("]");
        return sb.toString();
    }
}
```

Remember, we are overriding the toString method. Here, since our ArrayList implementation is working with Integers, we need to use `String.valueOf`. Otherwise, it won't work.

Also, we use StringBuilder, because otherwise we would again end up with an array and as we know, it doesn't work with arrays.

However, we can use something else. This time, let's change our code into String instead of int. Otherwise, it would be meaningless. At least now it will be cleaner.

```java
public String toString() {
    String longString = "[";
    for(int i=0;i<size; i++) {
        longString += elements[i];
        if(i < size -1) {
            longString += ", ";
        }
    }
    longString += "]";
    return longString;
}
```

Here, in the for loop, we said **size**, instead of `elements.length`. There is a reason for that. Remember, in our implementation we created an array of size 10. However, it is possible that I did not yet add 10 elements into that. Therefore, I need to count the size, not the length itself.


---
