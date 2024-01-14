---
layout: post
title: Component Object Model
categories: blog
draft: true
---

You may have heard of Page Object Model (POM) design pattern. This becomes useful when reusing elements on multiple test scripts. However many pages can reuse the same component ex. date picker.

AuditPage.js:
<pre><code>
module.exports = {
  elements: {
    datePickerInput: {
      selector: 'input[id="datePicker]'
    },
  }
};
</code></pre>

ReportPage.js:
<pre><code>
module.exports = {
  elements: {
    datePickerInput: {
      selector: 'input[id="datePicker]'
    },
  }
};
</code></pre>

We are duplicating elements in both pages. This issue can be resolved by creating a component. 

datePickerComponent.js:
<pre><code>
module.exports = {
  inputDate: function(date) {
    this.setValue('@datePickerInput, date)
    ....
  }
  elements: {
    datePickerInput: {
      selector: 'input[id="datePicker]'
    },
  }
};
</code></pre>

Now when we write out tests, we can use the same component for multiple pages. Which reduced more code and easier to maintain incase the developer decided to update the component.

AuditTest.js:
<pre><code>
datePickerComponent.inputDate('01/01/2001')
</code></pre>

ReportTest.js:
<pre><code>
datePickerComponent.inputDate('02/13/2001')
</code></pre>

We see that most web apps are built using UI components ex. React, Vue, and etc. Component Page Object is a simple but useful concept. I recommend trying it out!