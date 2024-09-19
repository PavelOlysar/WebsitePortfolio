<template>
    <section>
        <div>
            <h1>Pavel Olyšar</h1>
            <p>Lorem <span>{{ t('hero.highlight1') }}</span>, {{ t('hero.lang') }}<br>adipisicing elit.
                <span>{{ t('hero.highlight2') }}</span>,
                voluptate?
            </p>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
section {
    width: 100%;
    height: 85%;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 70%;

        display: flex;
        justify-content: center;
        flex-direction: column;

        gap: 4rem;

        h1 {
            font-size: 12rem;

            cursor: default;
        }

        p {
            font-size: 3.5rem;
            font-family: $font-regular;

            margin-left: auto;
        }

        span {
            font-family: $font-bold;

            cursor: crosshair;
        }
    }
}
</style>