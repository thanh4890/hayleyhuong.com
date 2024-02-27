import Image from 'next/image'

export default function Home() {
  return (
    <div id="app">
      <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
        <nav
          aria-label="Global"
          className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center py-[2.125rem]">
            <a className="mr-auto flex-none text-slate-900" href="/">
              <span className="sr-only">Tailwind UI</span>
              <svg
                className="h-6 w-auto"
                aria-hidden="true"
                viewBox="0 0 160 24"
                fill="none">
                <path
                  d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                  className="fill-sky-400"
                />
                <path
                  d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <div className="hidden lg:flex lg:items-center">
              <a href="/components">Components</a>
              <a className="ml-8" href="/templates">
                Templates
              </a>
              <div className="ml-2 hidden rounded-full bg-sky-500 px-1.5 py-0.5 text-xs text-white sm:block">
                New
              </div>
              <a className="ml-8" href="/documentation">
                Documentation
              </a>
            </div>
            <button
              type="button"
              className="-my-1 ml-8 flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="sr-only">Search components</span>
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-gray-900 hover:fill-gray-900">
                <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z" />
              </svg>
            </button>
            <button
              type="button"
              className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden">
              <span className="sr-only">Open navigation</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
                <path
                  d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
              <a href="/login">Sign in</a>
              <a
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
                href="/all-access">
                <span>
                  Get all-access <span aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]">
        <div className="relative mx-auto mt-16 grid w-full max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
          <div
            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500"
            aria-hidden="true">
            By the makers of Tailwind CSS
          </div>
          <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
            Build your next idea even faster.
          </h1>
          <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700">
            Beautifully designed, expertly crafted components and templates,
            built by the makers of Tailwind CSS. The perfect starting point for
            your next project.
          </p>
          <div className="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
              href="/components">
              <span>
                Browse components{/* */}{' '}
                <span
                  aria-hidden="true"
                  className="hidden text-slate-400 sm:inline">
                  →
                </span>
              </span>
            </a>
            <a
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
              href="/templates">
              <span>
                Explore templates{/* */}{' '}
                <span
                  aria-hidden="true"
                  className="hidden text-black/25 sm:inline">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <section className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div class="mt-16 flex border-t border-slate-200 sm:space-x-10 md:grid md:grid-cols-3 md:gap-x-8 md:space-x-0" role="tablist" aria-orientation="horizontal"><div><div class="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-indigo-500"><h3><button class="whitespace-nowrap text-sm font-semibold leading-7 sm:text-base [&amp;:not(:focus-visible)]:focus:outline-none text-indigo-600" id="headlessui-tabs-tab-55" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-58"><span class="absolute inset-0 -top-px"></span>Application UI</button></h3><p class="mt-2 hidden text-sm leading-6 text-slate-700 md:block">Form layouts, tables, dialogs — everything you need to build beautiful responsive web applications.</p></div></div><div class="w-10 min-w-[1rem] shrink sm:hidden" aria-hidden="true"></div><div><div class="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-transparent hover:border-slate-400"><h3><button class="whitespace-nowrap text-sm font-semibold leading-7 sm:text-base [&amp;:not(:focus-visible)]:focus:outline-none text-slate-900" id="headlessui-tabs-tab-56" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-59"><span class="absolute inset-0 -top-px"></span>Marketing</button></h3><p class="mt-2 hidden text-sm leading-6 text-slate-700 md:block">Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.</p></div></div><div class="w-10 min-w-[1rem] shrink sm:hidden" aria-hidden="true"></div><div><div class="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-transparent hover:border-slate-400"><h3><button class="whitespace-nowrap text-sm font-semibold leading-7 sm:text-base [&amp;:not(:focus-visible)]:focus:outline-none text-slate-900" id="headlessui-tabs-tab-57" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-60"><span class="absolute inset-0 -top-px"></span>Ecommerce</button></h3><p class="mt-2 hidden text-sm leading-6 text-slate-700 md:block">Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end.</p></div></div></div></section>
      
      <footer class="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8"><div class="border-t border-slate-900/5 py-10"><svg class="mx-auto h-5 w-auto text-slate-900" aria-hidden="true" viewBox="0 0 160 24" fill="none"><path d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z" class="fill-sky-400"></path><path d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z" fill="currentColor"></path></svg><p class="mt-5 text-center text-sm leading-6 text-slate-500">© 2024 Tailwind Labs Inc. All rights reserved.</p><div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700"><a href="/privacy-policy">Privacy policy</a><div class="h-4 w-px bg-slate-500/20"></div><a href="/changelog">Changelog</a></div></div></footer>

    </div>
  )
}
