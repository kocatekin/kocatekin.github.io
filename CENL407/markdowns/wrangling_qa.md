---
title: Exercises and answers about Data Wrangling
---

## Questions

**Q1:** What is the command we use to find a file in the file directory? 

**Q2:** What is the command we use to find a text in files?

**Q3:** Let's say you wrote a command using _ffmpeg_ before in your shell. How can you find it?

**Q4:** What is AWK?

**Q5:** How can you create multiple directories in one line? What is the command if you want to create directories aa, ab, ac, .. up to az?

## Answers

**A1:** We use the _find_ command. There are a lot of flags for find. For example, if we want to search the current and child directories for files starting with _hel_, we write `find . -name hel* -type f`. If we want to search for directories, we use _d_ instead of _f_ at the end.

**A2:** We use _grep_. `grep text file.txt`.

**A3:** We can use _history_ command to see the previous commands we write. If we use that command with _grep_ we can find it. `history | grep "ffmpeg"`.

**A4:** AWK is a column based stream editor. It is also a programming language and it can be used for many things. However, the main goal and use case for AWK is data manipulation/extraction, text processing and generating reports. 

**A5:** mkdir a{a..z}