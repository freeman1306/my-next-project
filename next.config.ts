import type { NextConfig } from "next";


module.exports = {
  images : {
    domains:['old-images.hb.ru-msk.vkcs.cloud']
  },
  webpack (config, options){
  config.module.rules.push({
    loader: '@svgr/webpack',
    issuer: /\.[jt]sx?$/,
    options:{
      prettier: false,
      svgo: true,
      svgConfig:{
        // plugins: [{removeViewBox: false}]
        plugins: [{
          name: 'preset-default',
          params: {
            override: {
              removeViewBox: false
            }
          }
        }]
      },
      titleProp: true,
    },
    test: /\.svg$/,

  })
  return config
},
}
