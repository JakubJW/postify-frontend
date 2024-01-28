<script setup lang="ts">
import AccountInfo from "./AccountInfo.vue";
import NavigationMenu from './NavigationMenu.vue'
import AppLogo from './AppLogo.vue'
</script>

<template>
	<div class="w-64 h-full flex flex-col justify-between border-r border-r-border bg-card">
		<AppLogo />
		<NavigationMenu />
		<AccountInfo />
	</div>
</template>