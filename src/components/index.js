 const jdTabbar=()=>import('./Layout/jd-tabbar.vue')
 const GoodItem=()=>import('./Gositem/jd-list.vue')
 const jdNvaBar=()=>import('./NavBar/jd-NvaBar')
 const empty=()=>import('./Empty/empty')
export{
    jdTabbar, //按需导出不用default
    GoodItem,
    jdNvaBar,
    empty
}