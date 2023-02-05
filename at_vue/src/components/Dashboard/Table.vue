<template>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Product</th>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Day %</th>
                <th scope="col">Weekly</th>
                <th scope="col">Monthly</th>
                <th scope="col">Quarterly</th>
                <th scope="col">YoY</th>
            </tr>
            </thead>
            <tbody>
                <keep-alive>
                    <tr v-for="value in table">
                        <td v-for="v, k, i in value" :key="v.id">
                            <a v-if="i < 3">{{v}}</a>
                            <a v-else-if="v.charAt(0)==='-'" style="color:#16a085;">{{v}}</a>
                            <a v-else style="color:red;">{{v}}</a>
                        </td>
                    </tr>
                </keep-alive>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'Table',
    props:{
        table:Object
    },
    date() {
        return{
        }
    }
}
</script>