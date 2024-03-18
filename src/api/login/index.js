import request from '@/utils/request'

export function getWallpaper(params) {
  return request({
    url: 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1',
    method: 'GET',
  })
}
