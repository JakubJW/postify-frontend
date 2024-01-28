<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useRoute } from "vue-router"
const route = useRoute();
const routes = [
	{
		path: '/new-post',
		name: 'newPost',
		icon: 'BadgePlus',
		label: 'New post collection'
	},
	{
		path: '/',
		name: 'home',
		icon: 'LayoutDashboard',
		label: 'Dashboard'
	},
	{
		path: '/post-collections',
		name: 'postCollections',
		icon: 'LayoutList',
		label: 'Post collections'
	},
	{
		path: '/schedule',
		name: 'schedule',
		icon: 'Calendar',
		label: 'Schedule'
	},
	{
		path: '/settings',
		name: 'settings',
		icon: 'Settings',
		label: 'Settings'
	},
]

const isCurrentRoute = (name: string) => {
  return route.name === name;
};
</script>
<script lang="ts">
import { defineComponent } from 'vue';
import { 
	LayoutDashboard, 
	Settings,
	Calendar, 
	LayoutList, 
	BadgePlus 
} from "lucide-vue-next"
export default defineComponent({
	components: {
		LayoutDashboard, 
		Settings,
		Calendar, 
		LayoutList, 
		BadgePlus 
	}
})
</script>

<template>
	<div class="p-4 space-y-4">
			<template v-for="(route, index) in routes" :key="index">
				<RouterLink 
					:to="route.path" 
					:name="route.name" 
					:class="
						cn(
							'p-4 flex justify-start space-x-2 rounded-xl font-medium hover:bg-secondary-hover hover:text-secondary-foreground',
							isCurrentRoute(route.name) &&
							'bg-secondary text-secondary-foreground',
						)">
					<component :is="route.icon" class="w-6 h-6" />
					<span>{{ route.label }}</span>
				</RouterLink>
			</template>
		</div>
</template>