import {request} from './request'
export function getCategory() {
    return request({
        url: '/category'
    })
}
export function getCategoryTop(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}
export function getCategorySub(miniWallkey,type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}