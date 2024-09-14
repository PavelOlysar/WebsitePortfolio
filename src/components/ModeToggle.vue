<template>
    <section>
        <div class="toggle">
            <div>Dark Mode</div>
            <div>M</div>
        </div>
        <div class="language">
            <div>Language</div>
            <div>L</div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ModeToggle"
};
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
        display: flex;
        align-items: center;
        gap: 0.5rem;

        cursor: pointer;

        div {
            &:last-child {
                width: 1.5rem;
                height: 1.5rem;

                display: flex;
                justify-content: center;
                align-items: center;

                border: 1px solid $main-black;
                border-radius: 0.5rem;
            }
        }
    }
}
</style>