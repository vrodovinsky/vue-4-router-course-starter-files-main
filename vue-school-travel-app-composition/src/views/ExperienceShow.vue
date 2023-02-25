<template>
    <section>
        <h1>{{experience.name}}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{experience.description}}</p>
    </section>
</template>

<script setup>
import sourceData from '@/data.json'
import {computed} from 'vue'

const props = defineProps({
    id: {type: Number, required: true}, 
    experienceSlug: {type: String, required: true}
})

const experience = computed (() => {
    const destination = sourceData.destinations.find((destination) => destination.id === props.id)
    return destination.experiences.find(experience => experience.slug === props.experienceSlug)
})
</script>
