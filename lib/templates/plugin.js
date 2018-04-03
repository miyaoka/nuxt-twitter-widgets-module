import Vue from 'vue'

const loadTwitter = (target) => process.browser && window.twttr && window.twttr.widgets.load(target)
const options = <%= JSON.stringify(options) %>

Vue.directive(options.directiveName, {
  bind: function(el){
    loadTwitter(el)
  },
  update: function(el){
    loadTwitter(el)
  }
})
