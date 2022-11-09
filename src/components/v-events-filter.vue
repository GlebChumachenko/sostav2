<template>
    <div class="v-events-filter" v-dragscroll="true" >
        <router-link
            class="v-events-filter__item"
            :to="{
                name: 'sport_page', 
                params:{ 
                    strsport: GET_SPORT.en
                }
            }"
        >
            Все
        </router-link>
        <router-link
            class="v-events-filter__item"
            v-for="(filter, index) in filters"
            :key="index + filter.name_category"
            :to="{
                name: 'filter_sport_page', 
                params:{ 
                    strsport: GET_SPORT.en,
                    filter_indx: filter.link
                }
            }"
            @click="changeActivity"
        >
            {{filter.name_category}}
        </router-link>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default{
        name: "v-events-filter",

        components:{ },

        data(){
            return {
                filters: [  
                    {
                        name_category: 'Запланированные',
                        link: 'zaplanirovannye_matchi'
                    }
                    // {
                    //     name_category: 'Live',
                    //     link: 'live'
                    // }
                ]
            }
        },

        created(){
            this.GET_ACTIVE_SPORT_INDEX(this.$route.params.strsport)
        },

        beforeRouteUpdate(){
            this.changeActivity
        },

        methods:{
            ...mapActions([
                'GET_ACTIVE_SPORT_INDEX'
            ]),

            // changeActivity(e) {
            //     setTimeout(function() {
            //         // if(document.querySelector('.v-events-filter__item_active')) {
            //         //     document.querySelector('.v-events-filter__item_active').classList.remove('v-events-filter__item_active');
            //         // }
            //         // e.target.classList.add('v-events-filter__item_active');
            //     })
            // }
        },

        computed:{
            ...mapGetters([
                'GET_SPORT'
            ])
        }
    }
</script>

<style scoped>
    >>>.v-events-filter__item.router-link-exact-active {
        background-color: var(--primary-color);
        color: var(--surface-color);
        border: none;
    }

    .v-events-filter {
        display: flex;
        overflow-x: hidden;
        mask-image: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%);
        -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%);
    }

    .v-events-filter__item {
        display: flex;
        align-items: center;
        padding: 0.75rem 1.25rem;
        margin: 0 0.5rem;
        border-radius: 0.5rem;
        color: var(--placeholder-color);
        font-weight: 600;
    }

    .v-events-filter__item:first-child {
        margin-left: 1rem;
    }

    .v-events-filter__item:last-child {
        margin-right: 1rem;
    }
</style>