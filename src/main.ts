import './style.css'
import './preload.css'

setTimeout(()=>{
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Let's get started!
      </h1>
    </div>
  </div>
`
}, 3000)