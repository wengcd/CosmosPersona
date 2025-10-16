// Service Worker for CosmosPersona
const CACHE_NAME = 'cosmospersona-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/finalscript.js',
  '/sub.html',
  '/Info/index.html',
  '/Resource/index.html',
  // 图片资源
  '/images/main.gif',
  '/images/Q1.gif',
  '/images/Q2.gif',
  '/images/Q3.gif',
  '/images/Q4.gif',
  '/images/Q5.gif',
  '/images/Q6.gif',
  '/images/Q7.gif',
  '/images/Q8.gif',
  '/images/Q9.gif',
  '/images/Q10.gif',
  '/images/Q11.gif',
  '/images/Q12.gif',
  '/images/Q13.gif',
  '/images/1DE.png',
  '/images/2light.png',
  '/images/3UFO.png',
  '/images/4nebula.png',
  '/images/5comet.png',
  '/images/6ST.png',
  '/images/7DM.png',
  '/images/8met.png',
  '/images/9BH.png',
  '/images/10Sn.png',
  '/images/11Grav.png',
  '/images/12hand.png',
  '/images/13sat.png',
  '/images/14sun.png',
  '/images/15gal.png',
  '/images/16rocket.png',
  '/images/all.png',
  '/images/izeecon.PNG'
];

// 安装 Service Worker 并缓存资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('正在缓存资源');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('缓存失败:', error);
      })
  );
  self.skipWaiting();
});

// 激活 Service Worker 并清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 拦截请求并返回缓存的资源
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果缓存中有，直接返回
        if (response) {
          return response;
        }
        
        // 否则发起网络请求
        return fetch(event.request)
          .then((response) => {
            // 检查是否是有效响应
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // 克隆响应并缓存
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // 网络请求失败时，返回离线页面（可选）
            return caches.match('/index.html');
          });
      })
  );
});

