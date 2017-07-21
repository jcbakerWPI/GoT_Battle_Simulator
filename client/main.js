import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import ApplicationList from './components/ApplicationList.vue'
import Description from './components/Description.vue'
import Service from './components/Service.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex'


Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power', 'hello'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity, hello: 'Yes'},
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})


const routes = [
  {
    path: '/',
    component: App,
    children: [
            {
        path: '/applications',
        component: ApplicationList
      },
      // {
      //   path: '/time-entries',
      //   component: TimeEntries,
      //   children: [
      //     {path: 'log-time', component: LogTime}
      //   ]
      // },
      {
        path: '/*',
        components: {
            default: Home,
            description: Description,
            service: Service,
        }
      },
    ]
  }
]

const router = new VueRouter({ routes })

window.app = new Vue({
  router,
}).$mount('#app')