import backTop from 'components/content/backtop/backTop'
export const BackTop = {
    data() {
        return {
            isShowBackTop: false
        }
    },
    components: {
        backTop
    },
    methods: {
        back_top() {
            this.$refs.scroll.scrollTo(0,0,1000)
          }
    }
}