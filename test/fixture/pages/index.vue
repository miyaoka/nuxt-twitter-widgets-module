<template>
  <div>
    <h2>`v-twitter-widgets`</h2>
    <div class="tw">
      <textarea v-model="text1"/>
      <div v-html="text1" v-twitter-widgets/>
    </div>
    <h2>no `v-twitter-widgets`</h2>
    <div class="tw">
      <textarea v-model="text2"/>
      <div v-html="text2"/>
    </div>
  </div>
</template>

<script>
import TweetDisplay from '~/components/TweetDisplay'

export default {
  components: {
    TweetDisplay
  },
  data() {
    return {
      text1: `<h3>This is the 1st tweet in the world.</h3>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">just setting up my twttr</p>&mdash; jack (@jack) <a href="https://twitter.com/jack/status/20?ref_src=twsrc%5Etfw">March 21, 2006</a></blockquote>`,
      text2: `<h3>This is the 2nd tweet in the world.</h3>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">inviting coworkers</p>&mdash; jack (@jack) <a href="https://twitter.com/jack/status/29?ref_src=twsrc%5Etfw">March 21, 2006</a></blockquote>`
    }
  }
}
</script>

<style scoped>
.tw {
  display: flex;
  justify-content: space-around;
}
.tw > * {
  width: 50%;
  margin: 1rem;
}
</style>
