import hero from "../asset/mern-food-ordering-app-course-resources/assets/hero.png"

export default function Hero() {
  return (
    <div>
        <img src={hero} className="w-full max-h-[600px] object-cover" />
    </div>
  )
}