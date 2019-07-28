

# Answers to About You and General questions

## 1. About you

Tell us about one of your commercial projects with Vue.js or AngularJS.

> Alright, I'll try to be short and clear.
> 
> I spent the last year working for a finnish startup. Their main product: a web app for reaching and interacting with large crowds of people - like attendees or stakeholders - through a nice chat interface. It was a mix between an event management app and a SMS-like chat.
> 
> I've been with them from year 2, where unfortunately the app was still in a very basic state (only core components was actually working, the chat and the chat editor).
> 
> I remember implementing features like the account registration form, a nicely animated drag and drop between chat messages, or customisable icons for the chat bot interchangeable through a context menu. I actually implemented new UI components all around the web app writing also a lot of backend code (but that's another story).
> 
> One of the "biggest" features I remember I worked on was implementing a full-stack service which was serving landing pages (each customer had one free landing page when signing in, used as a contact point for their event). I worked on the landing page layout first, which received dynamic content from the backend, also written by me. I worked on the landing page editor then, which included features like the logo uploader (on Cloudinary) and a rich text editor (Froala) to generate and edit the landing page content.
> 
> There was way much more than this, as we was weekly generating at least one or two pull requests, doing continuous integrations, writing tests (unit, e2e, etc), and so on.
> 
> What I loved and hated the most was how much stress we was putting on writing good quality code. We all followed the same code patterns, we refactored it multiple times (and we had to get updated on the "new best practices" pretty often), and so on. This let us grow very fast as programmers. Also, we was all writing the same code without almost no noticeable difference, being able to switch from one feature to another without much hassles, so that maintainability was always under our focus.

## 2. General

#### 2.1. What kind of front end projects do you enjoy working on? Why?

> I've actually always had an hard time understanding this question. I mean, I love to write frontend code and love doing it with Vue. It should be pretty straightforward that everybody would like more working on features they find interesting, in spite of writing route code for insteance.
> 
> Looking at my past projects, I can tell you I always liked a bit more adding details or improving existing features than creating big app components from scratch. Probably because the second one involves a much more thoughtful and organisationl approach, like trying and experimenting with UI/UX never used before. In either cases, I like a lot when my work has a huge impact on the results (a completely new look for that component, this new super cool drag'n'drop between the list items, that new dark theme for nightly usage, etc.).

#### 2.2. Which are your favorite features of HTML5? How have you used them before?

> I'm a big fan of writing good quality code, and I make no exceptions for HTML. I've been using most of the HTML 5 features so far and I like the way writing HTML code has become nowadays - at least, it's far better than before.
> 
> I'm still one of those who always close any single tag with a slash, like \<img \/\>, even though this has become not strictly needed with HTML5.
> 
> I'm instead pretty glad we now only need a simple <!DOCTYPE html> at the to decleare an HTML5 document, instead of all those long and complicated atrtibutes that I bet nobody always remember.
> 
> I can cite also all those semantic tags like \<header\> and \<footer\>, which I really like to see in action. Forcing myself to style a \<div\> or a \<span\> and use semantic tags like \<header\> for semantic is a good practice that I like pretty much.
> 
> Writing forms has also become much better with HTML 5 (the "required" attribute,  regular expressions, etc.). I'm also very glad of the SVG and font-face feataures, as well as animations and transitions (hmm but these are CSS3 features to be honest :thinking:).

#### 2.3. Explain the difference between creating a DOM element setting innerHTML and using createElement.

> Even after googling a little I'm still not sure which of the two is more performant. I've been using both of them, but actually can't remember in which cases I chosen setting the innerHTML property instead of going with document.createElement().
> 
> In my opinion, document.createElement() is the most "readable" and Javascript-like approach. Setting innerHTML can create a big mess (it's easy to forget a closing quote etc).

#### 2.4. Compare two-way data binding vs one-way data flow.

> In both cases UI elements are bound to the data model, but using a different approach.
> 
> When talking about two-ways data binding changes to the data are reflected on the UI, and changes to the UI are reflected to the data. Indeed, in the one-way data flow the data model is the only source of truth (the UI only reads the data).
> 
> A good example of two-ways data binding is when using the v-model directive in Vue.js: changing data would change the UI, and changes applied to the UI would change the data.
> 
> A good example of one-way data flow in Vue is instead what happens with Vuex: data is mapped locally and read by the UI, which can be modified only when events trigger mutations and actions (so no direct change to the data).

#### 2.5. Why is asynchronous programming important in JavaScript?

> UI are asynchronous by default, meaning that by nature a whoever user would not wait an event to be completed before clicking on another button. That means, asynchronous code is a very natural fit for this (if JavaScript wasn't asynchronous it would've been much more complicated to write frontend code).
> 
> Without async code in the UI we won't be able to make XHTTP requests and load server data while our app was displaying a nicely animated spinner. We won't also be able to make our websites and web apps so fast (they would be much, much, much slower!).
> 
> Blocking code is of course still important, and in fact not all JavaScript code is asynchronous. Withouth blocking code we won't have any control above our code flow.