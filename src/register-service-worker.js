









const isLocalhost_z = Boolean(
  window.location.hostname === 'localhost' ||
    
    window.location.hostname === '[::1]' ||
    
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)

export default function register_x () {
  if (import.meta.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    
    const publicUrl_z = new URL(import.meta.env.PUBLIC_URL, window.location.toString())
    if (publicUrl.origin !== window.location.origin) {
      
      
      
      return
    }

    window.addEventListener('load', () => {
      const swUrl_z = `${import.meta.env.PUBLIC_URL}/service-worker.js`

      if (isLocalhost) {
        
        checkValidServiceWorker(swUrl)

        
        
        navigator.serviceWorker.ready.then(() => {
          
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https:
          )
        })
      } else {
        
        registerValidSW(swUrl)
      }
    })
  }
}


function registerValidSW_x (swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker_z = registration.installing
        if (installingWorker == null) {
          return
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              
              
              
              
              
              console.log('New content is available please refresh.')
            } else {
              
              
              
              
              console.log('Content is cached for offline use.')
            }
          }
        }
      }
    })
    .catch(error => {
      console.error('Error during service worker registration:', error)
    })
}


function checkValidServiceWorker_x (swUrl) {
  
  window.fetch(swUrl)
    .then(response => {
      
      if (
        response.status === 404 ||
        response.headers?.get?.('content-type')?.indexOf('javascript') === -1
      ) {
        
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload()
          })
        })
      } else {
        
        registerValidSW(swUrl)
      }
    })
    .catch(() => {
      
      console.log(
        'No internet connection found. App is running in offline mode.'
      )
    })
}

export function unregister_x () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }
}
