<template>
    <div class="v-team">
        <router-link 
            :to="{name: 'team_page', 
                    params: { 
                    strsport: sport, 
                    strteamname: team_title.replaceAll(' ', '_')
                }}"
            :key="team_id + CURRENT_DATE"
        >
            <img 
                v-if="team_logo" 
                class="v-team__logo" 
                v-lazy="{ src: 'https://match.by' + team_logo, 
                          delay: 20 }" 
                :alt="team_title + ' logo'"
                :key="team_id + CURRENT_DATE"
            />
            <img 
                v-else 
                class="v-team__logo" 
                :src="team_logo" 
                :alt="team_title + ' logo'"
                :key="team_id + CURRENT_DATE"
            />
        </router-link>
        
        <router-link 
            :to="{
                name: 'team_page', 
                params: { 
                    strsport: sport, 
                    strteamname: team_title.replaceAll(' ', '_')
                    }}"
            :key="team_id + CURRENT_DATE"
        >
            {{ team_title }}
        </router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "v-team",
        props: { 
            team_logo:{
                type: String,
                defaul(){
                    return ""
                }
            },
            team_title:{
                type: String,
                defaul(){
                    return ""
                }
            },
            team_id:{
                type: Number,
                defaul(){
                    return 0
                }
            },
            sport:{
                type: String,
                defaul(){
                    return ""
                }
            }
        },

        data(){
            return{
            }
        },

        computed:{
            ...mapGetters([
                'CURRENT_DATE'
            ])
        }
    }
</script>

<style scoped>
    .v-team {
        display: flex;
        flex-direction: column;
        flex-basis: 30%;
        text-align: center;
        margin-top: 1rem;
    }

    .v-team__logo {
        object-fit: contain;
        height: 100%;
        width: 100%;
        height: 4rem;
    }

    .v-team__title {
        font-weight: 600;
    }
</style>