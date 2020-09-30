<template>
    <div class="calendar">
        <router-link to="/"><img src="../assets/logo.png" alt="logo" class="logo"></router-link>
        <h1>Calendar</h1>
        <nav class="subnav">
            <ul>
                <li>Fruits</li>
                <li>Légumes</li>
                <li>Autres</li>
                <li>{{ months[0].name}}</li>
            </ul>
        </nav>
        <div class="year-selector">
            <ul>
                <li>Janvier</li>
                <li>Février</li>
                <li>Mars</li>
                <li>Avril</li>
                <li>Mai</li>
                <li>Juin</li>
                <li>Juillet</li>
                <li>Août</li>
                <li>Septembre</li>
                <li>Octobre</li>
                <li>Novembre</li>
                <li>Décembre</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            months: [
                {name: 'Janvier', active: true},
                {name: 'Février', active: false},
                {name: 'Mars', active: false},
                {name: 'Avril', active: false},
                {name: 'Mai', active: false},
                {name: 'Juin', active: false},
                {name: 'Juillet', active: false},
                {name: 'Août', active: false},
                {name: 'Septembre', active: false},
                {name: 'Octobre', active: false},
                {name: 'Novembre', active: false},
                {name: 'Décembre', active: false}
            ]
        }
    }
}
</script>

<style>
    .calendar {
        display: block;
    }

    .subnav {
        display: flex;
    }


</style>