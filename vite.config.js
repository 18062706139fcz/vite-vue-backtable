import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 实现element-plus的按需引入
// import vitePluginImport from 'vite-plugin-babel-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 注册插件
    // vitePluginImport([
    //   {
    //     libraryName: 'element-plus',
    //     libraryDirectory: 'es',
    //     style(name) {
    //       return `element-plus/lib/theme-chalk/${name}.css`;
    //     },
    //   }
    // ])
  ],
  // 配置路径
  resolve: {
    alias: {
      '~': path.resolve(__dirname,'./'),
      '@': path.resolve(__dirname,'src')
    },
    extensions: ['.vue', '.js', 'jsx', '.json']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
      }
    }
  }
})
