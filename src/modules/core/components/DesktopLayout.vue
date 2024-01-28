<script setup lang="ts">
import SidePanel from "./SidePanel/SidePanel.vue"
</script>

<template>	  
	<main class="flex flex-grow bg-background">
		<SidePanel />
		<RouterView />
	</main>
</template>