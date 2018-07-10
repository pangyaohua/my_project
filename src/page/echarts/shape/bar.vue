<template>
  <div id="bar"　:style="{width:'300px',height:'300px'}">
  	
  </div>
</template>

<script>
  import {getBarData} from '../api'
  
  console.log(getBarData())
  export default {
    data () {
      return {
        getBarData: {}
      }
    },
    methods: {
      setBarData () {
       this.$echarts.init(document.getElementById('bar')).setOption(getBarData())
      }
    },
    mounted () {
      this.setBarData()
    }
  }
</script>
