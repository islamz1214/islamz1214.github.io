---
layout: default
title: Javascript
categories: guide
---

<div class="guide">

<img src="/assets/img/600px-JavaScript-logo.png" width="200px" height="200px" class="img-thumbnail" />

<hr>

<p>Is a cross-platform, object-oriented scripting language used to make webpages interactive.</p>

<table class="table">
<thead>
    <tr>
    <th>Javascript</th>
    <th>Java</th>
    </tr>
</thead>
<tbody>
   <tr>
    <td>not strict</td>
    <td>very strict</td>
  </tr>
  <tr>
    <td>browser-only</td>
    <td>JVM</td>
  </tr>
    <tr>
    <td>OOP Scriping - prototype</td>
    <td>Classic OOP</td>
  </tr>
  </tbody>
</table>

<b>Arrays</b> - is a global object that is used in the construction of arrays; which are high-level, list-like objects.
<ul>
    <li>Inherits from Object</li>
    <li>Performance is good with small data set</li>
    <li>Can be modified, length not fixed</li>
</ul>

<pre><code>var languages = ['PHP', 'JAVA', 'Python'];</code></pre>


<b>Variables</b>
<ul>
    <li>var - global scope, local scope if initialized in function</li>
    <li>let - block scope </li>
    <li>const - also block scope, but can't be modified</li>
    <li>case sensitive - "var x" & "var X" are two different variables!</li>
    <li>*Best practice - Use "const", if value change then use "let".</li>
</ul>


<b>Hositing</b> - behavior where variable and function (not expression) declarations gets pushed to the top.

<br>
<br>

<p>Due to hoisting, "x" gets hoisted to outer scope, therefore "x" value can be retrived.</p>
<pre><code>if (true) {
  var x = 1;
} 
console.log(x) // 1</code></pre>

Due to function (local scope), "x" does not update outer scope, therefore "x" value is not defined. 
<pre><code>function foo() {
  var x = 1;
} 
foo();
console.log(x) // not defined</code></pre>

<b>Comments</b>
<ul>
    <li>Single line: <pre><code>// I am a single line comment</code></pre></li>
    <li>Multi line: <pre><code>/* I am a 
    multi line comment */</code></pre></li>
</ul>

</div>