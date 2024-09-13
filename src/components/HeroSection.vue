<template>
    <section>
        <div>
            <h1>Pavel Olyšar</h1>
            <p>Lorem <span>ipsum dolor</span>, sit amet consectetur<br>adipisicing elit. <span>Error</span>, voluptate?
            </p>
        </div>
    </section>
</template>

<script>

export default {
    name: "HeroSection",
};
</script>

<style scoped lang="scss">
section {
    width: 100%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 60%;

        display: flex;
        justify-content: center;
        flex-direction: column;

        gap: 3rem;

        h1 {
            font-size: 10rem;
        }

        p {
            font-size: 2.25rem;
            font-family: $font-regular;

            margin-left: auto;
        }

        span {
            font-family: $font-bold;
        }
    }
}
</style>