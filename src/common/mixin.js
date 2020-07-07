import backtop from 'components/backtop/BackTop'
export const mixBackTop = {
    components: {
        backtop
    },
    data() {
        return {
            isShow: false
        }
    },
    methods:{
        backTop() {
            this.$refs.scroll.scrollTo(0,0)
        }
    }
}