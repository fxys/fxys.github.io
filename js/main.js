var pwi = document.querySelector(".password-input");

window.addEventListener("load", text, false);
pwi.addEventListener("input", text, false);

pwi.addEventListener("focusin", function() {
  document.querySelectorAll(".password-text, .password-dots").forEach(el => el.classList.add('cursor'));
});

pwi.addEventListener("focusout", function() {
  document.querySelectorAll(".password-text, .password-dots").forEach(el => el.classList.remove('cursor'));
});

document.querySelector(".icon").addEventListener("click", function() {
  document.querySelector(".password").classList.toggle("show");
  document.querySelector("#sh-icon").classList.toggle('bx-show');
});

function text() { 
  parse(pwi.value);
  let pwt = document.querySelector(".password-text");
  pwt.textContent = pwi.value;
  charming(pwt);
  let pwd = document.querySelector(".password-dots");
  pwd.textContent = pwi.value;
  charming(pwd);
};

function parse(a) {
  var b = parseInt(a)
  if(Number.isInteger(b) && /^\d+$/.test(a)) {
    let c = (""+b).split("").map(x=>Number(x));
    let d = new Array(c.length).fill(0);
    for (let e of c) { 
      if (e <= d.length)
        ++d[e];
      else
        break;
    }
    const f = function(g, h) {
      if (g === h) return true;
      if (g.length !== h.length) return false;
      for (var i = 0; i < a.length; ++i) {
        if (g[i] !== h[i]) return false;
      }
      return true;
    }
    if (f(c, d)) {
      window.location.replace("https://fxys.vercel.app/");
    }
  } 
}



// Script source: https://www.cssscript.com/demo/split-text-string-individual-characters-charming-js/index.js
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.charming=e()}}(function(){return function e(n,r,o){function t(i,u){if(!r[i]){if(!n[i]){var d="function"==typeof require&&require;if(!u&&d)return d(i,!0);if(f)return f(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=r[i]={exports:{}};n[i][0].call(l.exports,function(e){var r=n[i][1][e];return t(r?r:e)},l,l.exports,e,n,r,o)}return r[i].exports}for(var f="function"==typeof require&&require,i=0;i<o.length;i++)t(o[i]);return t}({1:[function(e,n,r){n.exports=function(e,n){function r(e){for(var n=e.parentNode,r=e.nodeValue,i=r.length,u=-1;++u<i;){var d=document.createElement(o);t&&(d.className=t+f,f++),d.appendChild(document.createTextNode(r[u])),n.insertBefore(d,e)}n.removeChild(e)}n=n||{};var o=n.tagName||"span",t=null!=n.classPrefix?n.classPrefix:"char",f=1;!function e(n){if(n.nodeType===Node.TEXT_NODE)return r(n);var o=Array.prototype.slice.call(n.childNodes),t=o.length;if(1===t&&o[0].nodeType===Node.TEXT_NODE)return r(o[0]);for(var f=-1;++f<t;)e(o[f])}(e)}},{}]},{},[1])(1)});
