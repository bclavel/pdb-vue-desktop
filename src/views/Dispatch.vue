<template>
    <div class="container">
        <img src="../assets/logo.png" alt="logo" class="logo">
        <p class="intro">Pourdebon vous aide à mieux consommer et à découvrir les producteurs proches de chez vous. Lorem ipsum sit dolor, marabum sed ficellum...</p>
        <div class="dispatch">
            <div class="push">
                <router-link to="/calendrier">
                    <img class="icon" src="../assets/calendar.png" alt="calendar">
                    <h2>Produits de saison</h2>
                </router-link>
            </div>
            <div class="push">
                <router-link to="/producteurs">
                    <img class="icon" src="../assets/farmer.png" alt="farmer">
                    <h2>Producteurs à proximité</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'PourDeBon.com'
        }
    },
    mounted: () => {
        console.log('$route')
    }
}
</script>


<style>
    .container {
        width: 75%;
    }

    h2 {
        font-size: 16px
    }

    .logo {
        /* width: 200px; */
    }

    .intro {
        margin: 40px 100px;
    }

    .icon {
        width: 50px;
        height: 50px;
    }

    .dispatch {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .push {
        margin: 30px

    }

</style>