const imgBase='http://localhost:8081' // 本地开发服务器的图片
const baseImg="http://localhost:4444"   // 远程服务器上的图片
//使用模块化来管理应用中的所有图片资源
export default{
    baseImg,
    searchIcon:imgBase+'/images/icon/search.jpg',//本地图片，访问时直接$img.searchIcon
    logo:imgBase+'/images/icon/logo.jpg',//本地图片，访问时直接$img.logo
}