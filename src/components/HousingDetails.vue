<template>
    <div>
        <h1>房源详情</h1>
        <div>{{details}}</div>
    </div>
</template>
<script>
export default {
    name: "HousingDetails",
    data() {
        return {
            data: ""
        }
    },
    computed: {
        /**
         * 详情数据
         */
        details() {
            return this.$SSRModel.HousingDetails.data.name
        }
    }
}
</script>