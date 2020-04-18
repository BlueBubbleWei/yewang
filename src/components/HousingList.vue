<template>
    <div>
        <h1>房源列表</h1>
        <div v-for="item in list" :key="item.value" @click="opensss">{{item.label}}</div>
    </div>
</template>
<script>
export default {
    name: "HousingList",
    data() {
        return {
        }
    },
    created() {
        console.log('sddd')
    },
    methods: {
        opensss() {
            window.open('/HousingDetails')
        }
    },
    computed: {
        list() {
            console.log('sss', this, this.$SSRModel.HousingList)
            if (this.$SSRModel) {
                return this.$SSRModel.HousingList.data.list
            }
        }
    },
    created() {

    }

}
</script>