import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"

function Header() {

  const handleType = (count) => {

  }
  return (
    <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl-pt-32 lg:pt-40 pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight pb-8 sm:text-7xl">
                  About us
                </h1>
                <p className="mt-16 text-2xl max-w-5xl leading-10 text-black ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Header
