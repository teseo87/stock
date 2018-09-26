// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('almaMenu', {
  props: ['almaMenu'],
  template:`<b-container class="bv-example-row">
  <b-row>
  	<b-col>
  		<b-navbar toggleable="md" type="dark" variant="info">
  		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  		<b-navbar-brand><router-link class='navbar-brand' to='/'>ALMA</router-link></b-navbar-brand>

  		<b-collapse is-nav id="nav_collapse">

	    <b-navbar-nav>
	      <b-nav-item><router-link class='nav-link' to='/'>Inicio</router-link></b-nav-item>
	      <b-nav-item><router-link class='nav-link' to='/almacenes'>Almacenes</router-link></b-nav-item>
	      <b-nav-item><router-link class='nav-link' to='/productos'>Productos</router-link></b-nav-item>
        <b-nav-item><router-link class='nav-link' to='/grafico'>Gráficos</router-link></b-nav-item>
        <b-nav-item><router-link class='nav-link' to='/rest'>Servicios</router-link></b-nav-item>
        <b-nav-item><router-link class='nav-link' to='/drag'>Drag</router-link></b-nav-item>
        <b-nav-item><router-link class='nav-link' to='/stock'>Stock</router-link></b-nav-item>
	    </b-navbar-nav>

	    <b-navbar-nav class="ml-auto">
			<b-nav-form>
				<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscar"/>
				<b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
			</b-nav-form>

			<b-nav-item-dropdown right>
				<!-- Using button-content slot -->
				<template slot="button-content">
				  <em>Usuario</em>
				</template>
				<b-dropdown-item href="#">Perfil</b-dropdown-item>
				<b-dropdown-item href="#">Salir</b-dropdown-item>
			</b-nav-item-dropdown>
    	</b-navbar-nav>

  		</b-collapse>
		</b-navbar>
	</b-col>
  </b-row>
  </b-container>`,

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
