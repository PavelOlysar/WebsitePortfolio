<template>
    <nav>
        <section>
            <a href="/" class="logo">LOGO</a>
        </section>
        <section class="links">
            <ul>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li class="contactLink">
                    <a href="">Contact</a>
                </li>
            </ul>
        </section>
    </nav>
</template>

<script setup>
</script>

<style scoped lang="scss">
nav {
    width: 100%;
    height: 10%;

    padding: 0 4.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid $secondary-color;


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

            li:nth-child(-n+2) a {
                font-size: 1.25rem;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -1px;
                    width: 0;
                    height: 2px;
                    background-color: $text-color;
                    transition: width 0.3s ease-in-out;
                }

                &:hover::after {
                    width: 100%;
                }
            }

            .contactLink {
                font-size: 1.25rem;

                padding: 0.5rem 1.25rem;
                border: 1px solid $text-color;
                border-radius: 1.5rem;

                transition: all 0.3s ease-in-out;

                &:hover {
                    color: $background-color;
                    background-color: $text-color;
                    border: 1px solid $background-color;
                }
            }
        }
    }
}
</style>
