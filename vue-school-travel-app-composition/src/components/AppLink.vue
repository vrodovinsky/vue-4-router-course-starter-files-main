<template>
    <div>
        <a v-if="isExternal" target="_blank" class="external-link" rel="noopener" :href="to"><slot/></a>
        <router-link v-else v-bind="$props" class="internal-link"><slot/></router-link>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
import {computed} from 'vue'

const props = defineProps({
    ...RouterLink.props
})

const isExternal = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>
