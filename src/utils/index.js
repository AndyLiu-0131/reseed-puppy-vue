import path from 'path-browserify'
/**
 * @description: 这是一个合并路径的方法
 * @param {string} basePath
 * @param {string} curPath
 * @return {string} path which has be resolved
 */
export function resolve(basePath, curPath) {
  return path.resolve(basePath, curPath)
}
/**
 * @description: 引入assets下的资源
 * @param {string} url 基于assets文件夹下的相对路径
 * @return {*}
 */
export const getAssetsFile = (url) => {
  return new URL(`../assets` + url, import.meta.url).href
}
