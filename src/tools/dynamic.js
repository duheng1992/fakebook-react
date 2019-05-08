import Loadable from 'react-loadable'

import Home from '../components/Home'
//下面一段代码即可按需按需加载完react组件，webpack会自动切割代码
export const ComponentList = Loadable({
  loader: () => import('../components/MyTabBar'),
  loading: Home
})