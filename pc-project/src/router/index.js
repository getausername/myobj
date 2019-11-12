import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/components/Home"
import Login from "@/components/Login"
import LAndR from "@/components/LAndR"
import Register from "@/components/Register"
import Manage from "@/components/Manage"
import Personal from "@/components/Personal"
import Page1 from "@/views/Page1"
import Page2 from "@/views/Page2"
import Page3 from "@/views/Page3"
import Page4 from "@/views/Page4"
import Journal from "@/views/Journal"
import Menu from "@/views/Menu"
import Index from "@/views/Index"
import Topic from "@/views/Topic"


Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
			path: '/personal',
			name: 'Personal',
			component: Personal,
			children: [{
					path: '/index',
					name: 'Index',
					component: Index
				},
				{
					path: '/journal',
					name: 'Journal',
					component: Journal
				},
				{
					path: '/menu',
					name: 'Menu',
					component: Menu
				},
				{
					path: '/topic',
					name: 'Topic',
					component: Topic
				}
			]
		},
		{
			path: "/",
			name: "Home",
			component: Home,
			redirect: "/page1",
			children: [{
					path: "/page1",
					name: "Page1",
					component: Page1
				},
				{
					path: "/page2",
					name: "Page2",
					component: Page2
				},
				{
					path: "/page3",
					name: "Page3",
					component: Page3
				},
				{
					path: "/page4",
					name: "Page4",
					component: Page4
				}
			]
		},
		{
			path: '/landr',
			name: 'LAndR',
			component: LAndR,
			redirect: '/login',
			children: [{
					path: '/login',
					name: 'Login',
					component: Login,
				},
				{
					path: '/register',
					name: 'Register',
					component: Register
				}
			]
		},
		{

			path: '/manage',
			name: 'Manage',
			component: Manage,
			meta: {
				title: '个人管理'
			}
		}
	]
})
