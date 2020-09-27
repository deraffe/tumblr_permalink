// ==UserScript==
// @name        Tumblr Permalink Adder
// @namespace   https://github.com/deraffe
// @match       https://sarahcandersen.com/*
// @version     0.1
// @author      deraffe
// @description Adds a permalink to tumblr blogs that hide it by default. Written for Sarah's Scribbles.
// ==/UserScript==

function q(s) {
  return document.querySelector(s)
}

function addChild(parent, tag, content) {
  const e = document.createElement(tag)
  e.textContent = content
  parent.appendChild(e)
  return e
}

if(q('article')) {
  const article = q('article')
  const id = article.id
  const link = addChild(addChild(article, 'p', ''), 'a', 'permalink')
  const path = id.replace('-', '/')
  const url = document.location.origin + '/' + path
  link.href = url
}
