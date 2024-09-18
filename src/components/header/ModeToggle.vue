<template>
    <section>
        <div class="toggle" @click="$emit('toggle-mode')">
            <div class=" description">Press 'M' or click this.</div>
            <div>Dark Mode</div>
            <div>M</div>
        </div>
        <div class="language" @click="toggleLanguage">
            <div class="description">Press 'L' or click this.</div>
            <div>Language</div>
            <div>L</div>
        </div>
    </section>
</template>

<script setup>
defineEmits(['toggle-mode']);
</script>

<style scoped lang="scss">
section {
    height: 5%;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2rem;

    .toggle,
    .language {
        position: relative;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        cursor: pointer;

        &:hover {
            > :nth-child(2) {
                opacity: 0.6;
            }

            > :last-child {
                color: $background-color;
                background-color: $text-color;

            }
        }

        div {
            transition: all 0.3s ease-in-out;

            &:last-child {
                width: 1.5rem;
                height: 1.5rem;

                display: flex;
                justify-content: center;
                align-items: center;

                border: 1px solid $text-color;
                border-radius: 0.5rem;
            }
        }

        .description {
            position: absolute;
            bottom: 2rem;

            padding: 0.5rem;

            visibility: hidden;
            opacity: 0;

            color: $text-color;

            border: 1px solid $text-color;
            border-radius: 0.5rem;
            border-bottom-right-radius: 0;

            transition: all 0.3s ease-in-out;
        }

        &:hover .description {
            visibility: visible;
            opacity: 1;
        }
    }
}
</style>