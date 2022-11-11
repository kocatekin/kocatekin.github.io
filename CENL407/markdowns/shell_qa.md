---
title: Exercise questions and answers for "Introdution to Shell" 
---


## Questions

**Q1:** What is a terminal and what is the difference between terminal and shell?

**Q2:** What is the difference between _absolute path_ and _relative path_? Which commands we use to see them?

**Q3:** Name some simple commands for the following: listing files in the current directory, moving, copying, deleting, writing to the screen.

**Q4:** Let's say we have a program which gives an output to the output stream. The name of the program is _myprogram_. How would we give the output to a file instead of stdout?

**Q5:** What is piping and how is it useful?

**Q6:** What is the admin user called in Unix like systems and how do you get access to it?

**Q7:** How can you learn details of a command?

## Answers

**A1:** Terminal is a program which runs the shell. It is a separate program from the shell. On a single terminal you can run several shells. Shell is an application which comes with the operating system.

**A2:** When we are talking about the whole path, we say it is an absolute path. When we write the path relative to where we are, it is relative path. So, if we write `cd ~/src/dir`, it is a full path and therefore absolute. But if we are in _home_ directory, we write the relative path as `cd src/dir`. Commands we use are _which_ and _pwd_ respectively.

**A3:** ls, mv, cp, rm, echo.

**A4:** We use the `>` symbol. `./myprogram > out.txt`. This way, the output will not be seen in the _stdout_ but in _out.txt_. If we use `>>` instead of `>` it will append it.

**A5:** It helps us to give the output of a program as an input to other by using `|` symbol. With piping, we can use multiple programs which are not desired for each other collaboratively. Piping wires these programs together. An example is, `echo 'hello world' | tail -n1`. Here, the output of the first command will be the input of the second.

**A6:** It is called _root_ or _superuser_. We use the command su to get root rights. However, we can also add _sudo_ to the beginning of the commands that we want to run as root. Usually, it is not recommended to be in _root_ mode at all times.

**A7:** By using _man_ command. `man grep` will show us the manual about the _grep_ command. We can use it for every command.