---
title: Data Wrangling
author: Tugberk
---

`{}` can be used for multiple purposes and with various commands. For example; `echo a{b,c}` will print out `ab ac`. You can also use it to make directories, `mkdir a{b,c}` command is going to create folders _ab_ and _ac_. 

You can use asterisk `*` to list similar stuff. For example by using `ls a*` you can list everything that starts with letter _a_. However, if there is a folder named _abc_, that command is going to list that too. If you want to list ab and ac, you can use ? as `ls a?`. This will only list ab, ac and alike.

You can also use curly brackets for other purposes. For example _convert_ command is used to convert images into different formats by using `convert image.png image.jpg`. By using curly brackets you can do `convert image.{png,jpg}`. 

You can also use _touch_ command similarly. For example lets say you have two directories _foo_ and _bar_. If you want to create certain directories in both these directories you can use `touch {foo,bar}/{a..j}`. Check each directory to see what is created.

>Remember that each script in the shell works in a _subshell_. Therefore if you _cd_ into something in the script, when the script ends you will not see your _pwd_ differently. It will be the same. If you want the changes in the script applied to your situation, use `.` before running your command. `. ./script`

## TLDR

When we want to see how a command works, we generally have two options: _man_ and _--help_. Tldr gives us an option where it shows the most used flags in color. For simple commands, _tldr_ can be very helpful. You can use it as follows: `tldr find`

## Find

Find command is a very useful command with a lot of flags. You can find any file by using this command and do additional stuff on top of it. For example, `path . -name src -type d`. This will look within the directory for the directory src. Here, _d_ represents directory. You can change it to _f_ to look for files.

There are a lot of flags and options which you can learn by using _tldr_ or _man_. You can even apply commands onto files using find. For example the following command will find files with _tmp_ extension and delete them. `find . -name "*.tmp" -exec rm {} \;` You can also use `rm *.tmp` for the same command but the previous example intends to show that you can run commands on found materials.

## Grep

With find, we can find files but sometimes we want to content of the file. For that, we use _grep_. Similar to _find_ there are a lot of options with grep, but the simplest use is as follows: `grep text file.txt`. This will look for the word _text_ in file.txt. 

>There are additional software available for different uses in shell such as _ripgrep (rp)_. You can download such applications and use them if you find them useful. However, keep that in mind that these are 3rd party applications and there may be some errors not yet found.

## history

In shells, you may want to see the commands you wrote before. _history_ commands shows us this. By using _tldr_ again you can find different uses for this command. However, simply just write _history_ and you will see your previous commands. If you are looking for a specific command, you can use _grep_ to find it: `history | grep ffmpeg` will help you find the ffmpeg commands you used.

## Data wrangling

Any time we use `|` _piping_ we are actually doing some kind of data wrangling. We are manipulating the inputs and outputs. Shell is very useful in this regard. Here, we are going to look at a log example and try to manipulate it to get information. For that, let's learn some applications and concepts.

### sed

Sed is _stream editor_. It is a somewhat newer version of the old _ed_. Although it is a programming language, it is generally used for _searching_ and _replacing_ stuff in text files. It is generally used as follows: `sed 's/search/replace/'`

### regex

Regex (or regexp) is short for _regular expressions_. It is a topic on its own. It is a very powerful way to match text. You can use it for other purposes as well but generally it is used with text. 

```bash
echo "abab" | sed 's/[ab]//' #output: bab
echo "abab" | sed 's/[ab]//g' #output:
```

Examples above uses `[ab]`. That means if a character is a or b, replace it with something else. In the case of the example above, it is replacing it with empty space, which means it is deleting it. We use _g_ when we want to apply the same rule into everything in that line.

```bash
echo "abc" | sed 's/[ab]//' #output: bc
echo "abc" | sed 's/[ab]//g' #output: c
```

Examples above show this distinction more clearly. In the first line, since we don't use _g_; the rule is going to be run once and since the first char is one of a or b; it will delete it. However, in the second line since we use _g_; it is going to run for both a and b and deleting them, giving us the output c.

We can also use parenthesis, but that means something different. Let's look at it with an example:

```bash
echo "abcaba" | sed -E 's/(ab)//' #output: caba
echo "abcaba" | sed -E 's/(ab)//g' #output: ca
```

Here we use the _-E_ because since _sed_ is an old application, that flag helps sed to understand more modern regex. Here, instead of looking for _a or b_ we are looking at _ab_ as a whole. Since we don't use _g_, it worked for once. In the second line, we use _g_ so that it applies the rule to every possible occasion.

We can also use or operator when we are trying to match whole patterns.

```bash
echo "acababc" | sed -E 's/(ab|bc)//g' #output: acc
echo "bcbcbcd" | sed -E 's/(ab|bc)//g' #output: d
echo "abcadbc" | sed -E 's/(ab|bc)//g' #output: cad
``` 
Here, when _ab_ is there, it deletes that. It did not have any opportunities to delete _bc_. Next lines give a better example. In the next line, there is no _ab_ but there is _bc_ and the command works on it. In the third one, you can see both of them visible. First, all _ab_ matches are deleted and we have _cadbc_. Then the _bc_ works and the result is _cad_.

>With regular expressions you can solve almost anything, but it can be very hard and complex. That is why there are _regex debuggers_ online which can help you to visualize how your regex works on a given text. It helps with complicated regex. There are many _regular expressions_ available online for certain tasks, a simple Google search can help you find them. However, you should always keep in mind that when you are running a command or anything you found from the internet, there is a risk that it may not work as expected. Be careful for edge cases.

### Combining all together

There are many useful commands in shell such as _sort_ and _uniq_. We are going to use them alongside with others for the (ssh.log)[https://raw.githubusercontent.com/kocatekin/kocatekin.github.io/main/CENL407/files/ssh.log] file. From this file, we are going to find usernames who attempted to login but was unsuccesful. Again, this is just for demonstration purposes and therefore may not be useful in daily life, but will give an example of the capabilities of shell.

Let's start by simple grep commands. When you `cat ssh.log` you will see there are a lot of lines. We are interested in those which are _sshd_ and _Disconnected from_. 

```bash
cat ssh.log | grep sshd | grep "Disconnected from"
```

This line outputs those includes these terms. Now, we want to delete unnecessary things to get the username. For this, let's talk about _capture group_. Those terms we put in parenthesis are called _capture groups_. We are going to use this later on. 

Let's carry on. 

```bash
cat ssh.log | grep sshd | grep "Disconnected from" | sed -E 's/.*Disconnected From//g'
```

The output is going to be,
```
 invalid user pz 23.102.255.235 port 45534 [preauth]
 authenticating user root 125.65.42.183 port 39167 [preauth]
 invalid user pz 23.102.255.235 port 34854 [preauth]
 invalid user q2server 23.102.255.235 port 52381 [preauth]
 invalid user q2 23.102.255.235 port 41693 [preauth]
 authenticating user root 175.117.145.239 port 29277 [preauth]
 invalid user q2 23.102.255.235 port 59260 [preauth]
 invalid user uftp 175.117.145.239 port 46345 [preauth]
 invalid user q3server 23.102.255.235 port 48571 [preauth]
 authenticating user root 125.65.42.178 port 46580 [preauth]
 invalid user default 175.117.145.239 port 63407 [preauth]
 invalid user q3 23.102.255.235 port 37911 [preauth]
 invalid user q3 23.102.255.235 port 55448 [preauth]
 invalid user admin 63.139.133.35 port 41624 [preauth]
 invalid user qlserver 23.102.255.235 port 44748 [preauth]
 invalid user kiran 63.139.133.35 port 58841 [preauth]
 invalid user gl 23.102.255.235 port 34035 [preauth]
 authenticating user root 61.184.247.12 port 51790 [preauth]
 invalid user octro 63.139.133.35 port 47840 [preauth]
 invalid user gl 23.102.255.235 port 51584 [preauth]
 invalid user qwserver 23.102.255.235 port 40907 [preauth]
 authenticating user root 115.238.245.14 port 46493 [preauth]
 invalid user qw 23.102.255.235 port 58449 [preauth]
 invalid user qw 23.102.255.235 port 47779 [preauth]
 invalid user roserver 23.102.255.235 port 37087 [preauth]
 invalid user ro 23.102.255.235 port 54628 [preauth]
 invalid user ro 23.102.255.235 port 43951 [preauth]
 invalid user ricochetserver 23.102.255.235 port 33278 [preauth]
 invalid user ricochet 23.102.255.235 port 50835 [preauth]
 invalid user ryder 91.134.140.32 port 51162 [preauth]
 invalid user ricochet 23.102.255.235 port 40142 [preauth]
 invalid user matt 91.134.140.32 port 56934 [preauth]
 invalid user rustserver 23.102.255.235 port 57696 [preauth]
 invalid user secret 91.134.140.32 port 34476 [preauth]
 invalid user rust 23.102.255.235 port 47029 [preauth]
 invalid user rust 23.102.255.235 port 36353 [preauth]
 invalid user sampserver 23.102.255.235 port 53909 [preauth]
 invalid user samp 23.102.255.235 port 43221 [preauth]
 invalid user samp 23.102.255.235 port 60777 [preauth]
 invalid user ss3server 23.102.255.235 port 50074 [preauth]
 invalid user ss3 23.102.255.235 port 39391 [preauth]
 invalid user ss3 23.102.255.235 port 56937 [preauth]
 invalid user sbserver 23.102.255.235 port 46251 [preauth]
 authenticating user root 125.65.42.178 port 44726 [preauth]
 invalid user sb 23.102.255.235 port 35566 [preauth]
 authenticating user root 61.184.247.8 port 37153 [preauth]
```

We see that the next term we need to get rid of is invalid and authenticating. It is followed by _user_. For the sake of simplicity, let's just write the _sed_ part.

```bash
sed -E 's/.*Disconnected from (invalid|authenticating)? user//g'
```

Now, we use parenthesis because we want the exact match. The ? indicates this shall run only once. So, if there were two _invalid_ only the first one would be deleted. Here, from the text above we see that these words only written once. After that, we just write user and it is deleted. Here is the result of the first 10 lines.

```
 pz 23.102.255.235 port 45534 [preauth]
 root 125.65.42.183 port 39167 [preauth]
 pz 23.102.255.235 port 34854 [preauth]
 q2server 23.102.255.235 port 52381 [preauth]
 q2 23.102.255.235 port 41693 [preauth]
 root 175.117.145.239 port 29277 [preauth]
 q2 23.102.255.235 port 59260 [preauth]
 uftp 175.117.145.239 port 46345 [preauth]
 q3server 23.102.255.235 port 48571 [preauth]
 root 125.65.42.178 port 46580 [preauth]

 ```

 We need to get the username, IP address, port, port number and delete de preauth. 

```bash
sed -E 's/.*Disconnected from (invalid|authenticating)? user .* [0-9.]+ port [0-9]+ (\[preauth\])//g'
```

When we write the command above, everything will be deleted. Let's go through them. After user, we put `.*` which indicates the term at that place. We know that it is a text, we said just get it. Next term is `[0-9.]+`. IP number consists of numbers and a dot. + at the end tells that this occurs more than once. Remember we used ? so that we are going to look at it once. We know say that it occurs more than once, so apply it for every consecutive occurence. Then we just write port, and after that we do `[0-9]+`. Here, there is no _dot_ because port numbers do not have that. Lastly, we use `\` symbols because since `[ and ]` are special characters we need to escape them.

Right now, we deleted everything so it is useless. Remember that few lines above we defined something as _capture group_. We are going to make our username a capture group, because we can use them in order to replace. We capture the username by putting it in parenthesis. So; `.*` becomes `(.*)`.

After that, we can refer to it as follows:

```bash
sed -E 's/.*Disconnected from (invalid|authenticating)? user (.*) [0-9.]+ port [0-9]+ (\[preauth\])/\2/g'
```

There are two differences here. One of them is putting `.*` into parenthesis and the other is we changed the _replace_ part to `\2`. There are 3 capture groups in this line and we want to see the second one. Therefore, for _replace_ part we put that and when you run this; you will end up with:

```
pz
root
pz
q2server
q2
root
q2
uftp
q3server
root
default
q3
q3
admin
qlserver
kiran
gl
root
octro
gl
qwserver
root
qw
qw
roserver
ro
ro
ricochetserver
ricochet
ryder
ricochet
matt
rustserver
secret
rust
rust
sampserver
samp
samp
ss3server
ss3
ss3
sbserver
root
sb
root
```

Now, we have a list. By using existing commands in shell, we can get meaning out of these. First of all, lets sort them. By adding `| sort` to the end of the command above, you will end up with a sorted list. However, you will see that there are replicates. We can get rid of them by using the command _uniq_. 

Adding `| uniq -c` after the _sort_ will give us this result:

```
      1 admin
      1 default
      2 gl
      1 kiran
      1 matt
      1 octro
      2 pz
      2 q2
      1 q2server
      2 q3
      1 q3server
      1 qlserver
      2 qw
      1 qwserver
      2 ricochet
      1 ricochetserver
      2 ro
      7 root
      1 roserver
      2 rust
      1 rustserver
      1 ryder
      2 samp
      1 sampserver
      1 sb
      1 sbserver
      1 secret
      2 ss3
      1 ss3server
      1 uftp
 ```

As you can see, this is not sorted. You can put an additional `| sort` to sort it. It will list it from top to bottom, you can reverse it by using -r flag for sort command.

At this point, you end up with a lot of usernames and how many times they are used for login attempts. Here, you may want to read only the usernames and not the numbers. We can use _awk_ for that. 

### AWK 

AWK is a programming language. It is a _column based_ stream processor unlike _sed_ which is a _stream editor_. AWK can be very complicated and almost anything can be done with it, but we are going to give very simple examples. 

Since it is a column based stream processor, you can reach columns very easily by using `$` notation. For example; if we add `| awk '{print $1}'` to our long pipe; we are going to see the numbers. If you change _$1_ into _$2_ you will see the usernames! 

### Paste

Paste is also a built-in command. It merges text. When we do _tldr_ we can see several usages for paste command. You can try all of them by writing paste command at the end of the pipeline. For example, let's try `-sd`.

```bash
| awk '{print $2}' | paste -sd,
```

This will give you the usernames separated by a comma. You can also change the comma into whatever character you want.

### bc

This command lets you use mathematical operations in shell. `echo "1+2" | bc -l` will give you 3 as an output. 

Let's do a simple example which includes everything we learned so far. As you saw in the echo example above, whatever is in the stream, _bc_ can do the calculation. So, how can we get the total number of usernames which are used more than once?

```bash
| awk '$1 != 1 {print $1}'
```

This will give us numbers which are not equal to 1. But it is going to be in column format. But we know we can write these side by side by using _paste_ command. What would happen if we use `+` instead of `,`?

```bash
| awk '$1 != 1 {print $1}' | paste -sd+ 
```

We will end up with;
```
2+2+2+2+2+2+2+7+2+2+2
```

We can use `bc -l` to get the summation!

## Closing remarks

There are a lot of things which can be done in shell. These are to give certain easy examples to make you realize the power of shell. You can even use different programs like _R_ or _gnuplot_ to manipulate and get information from the outputs we did. 






