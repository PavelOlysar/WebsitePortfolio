<template>
    <nav>
        <section>
            <a href="/" class="logo">LOGO</a>
        </section>
        <section class="links">
            <ul>
                <li>
                    <a href="">projects</a>
                </li>
                <li>
                    <a href="">about</a>
                </li>
                <li class="contactLink">
                    <a href="">contact</a>
                </li>
            </ul>
        </section>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped lang="scss">
nav {
    width: 100%;
    height: 10%;

    padding: 0 4.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid $main-grey;


    .logo {
        font-family: $font-bold;

        font-size: 1.5rem;
    }

    .links {
        ul {
            width: 300px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                font-size: 1.25rem;
            }

            .contactLink {
                padding: 0.5rem 1.25rem;
                border: 1px solid $main-black;
                border-radius: 1.5rem;
            }
        }
    }
}
</style>
