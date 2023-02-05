<template>
    <div class="col-2 mb-4 mt-5">
        <div class="card"  style="background-color:#000000">
            <div class="card-header text-center text text-white" style="background-color:#000000"><h2 class="fw-bold">{{ChainItem.Title}}</h2>
                <div class="row h-50">
                    <div class="card border-white" style="background-color:#000000" >
                        <div class="card-body text-white" style="background-color:#000000"  v-for="sub in ChainItem.subtitle">
                            <div class="h3 pb-2 mb-3 text-white border-bottom border-white">
                                {{sub.Title}}<span class="badge bg-danger ms-2 me-2 border-white">-17%</span>
                            </div>
                            <div v-for="item in sub.Detail">
                                <p class="card-text fs-5 mt-3 mb-2">-{{item.cat}}</p>
                                <div class="hstack gap-1 mb-1 d-flex justify-content-between" 
                                v-if="item.com[0]!=''" v-for="arr,i in item.com" >

                                    <a v-for="comp,j in arr" :href="'/Comp/'+ item.code[[i]][j]" 
                                    class="btn bg-warning fs-6 text-white bg-opacity-10 
                                    border border-warning border-start rounded-end w-100 ">

                                        {{comp}}
                                    </a>
                                </div>
                            </div>

                            <a :href="sub.html[1]" class="btn bg-info fs-5 mt-2 text-white bg-opacity-10 border border-info border-start rounded-end w-100">
                                {{sub.html[0]}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-1 mt-5" v-if="ChainItem.Process !=''">
                <div class="row mt-5 mx-auto border-opacity-10">
                </div>

                <div class="row mt-5 pt-5">
                    <h3 class="text-white text-center fw-bold">{{ChainItem.Process}}</h3>
                </div>
                    
                <div class="arrow ">
                    <div class="line"></div>
                    <div class="point"></div>
                </div>
            </div>
    

</template>

<script>
    export default {
        name:'IndustryValueChain',
        props:{ ChainItem:Object}
    }

</script>

<style lang="scss">
    .arrow {
    width:120px;
    margin:50px auto;
    }

    .line {
        margin-top:14px;
        width:90px;
        background:white;
        height:10px;
        float:left;
    }
    .point {	
        width: 0; 
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 30px solid white;
        float:right;
    }
</style>