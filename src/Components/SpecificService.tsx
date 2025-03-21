"use client"
import React from "react"
import Image from "next/image"
import filler from '../../public/filler.png'
import botox from '../../public/botox.png'
import skin from '../../public/skin.png'
import hair from '../../public/hair.png'
import chemical from '../../public/chemical.png'
import derma from '../../public/derma.png'

interface ServiceItem {
  id: string
  title: string
  productImg: StaticImageData
  description: React.ReactNode
  showDetails?: boolean
}

function SpecificService() {
  const services: ServiceItem[] = [
    {
      id: "fillers",
      title: "Fillers",
      productImg: filler,
      description: (
        <>
          <p className="mb-4">
            <span className="text-yellow-400 font-medium">Fillers</span> are composed of hyaluronic acid, a substance
            naturally found in the body, which helps to hydrate and plump the skin.
          </p>
          <p>
            With precise injections, we can target areas such as the lips, cheeks, nasolabial folds, and more, leaving
            you with natural-looking and youthful results.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "botox",
      title: "Botox",
      productImg: botox,
      description: (
        <>
          <p className="mb-4">
            Botox is a non-surgical, minimally invasive procedure that targets dynamic wrinkles caused by facial
            expressions.
          </p>
          <p className="mb-4">
            Our highly skilled practitioners will carefully administer the treatment, utilizing precise injections to
            temporarily relax the underlying muscles.
          </p>
          <p>
            As a result, the appearance of crow's feet, forehead lines, and frown lines can be significantly reduced,
            giving you a more refreshed and rejuvenated look.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "skin-boosters",
      title: "Skin Boosters",
      productImg: skin,
      description: (
        <>
          <p className="mb-4">
            <span className="text-yellow-400 font-medium">Skin Boosters</span> are composed of hyaluronic acid, a
            naturally occurring substance in the body that helps maintain hydration and elasticity.
          </p>
          <p className="mb-4">
            When injected into the skin, these boosters provide deep hydration, improve skin texture, and promote
            collagen production.
          </p>
          <p>The result is smoother, firmer, and more radiant skin.</p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "dermapen",
      title: "Dermapen",
      productImg: derma,
      description: (
        <>
          <p className="mb-4">
            Dermapen utilizes advanced micro-needling technology to stimulate collagen production and cellular renewal.
          </p>
          <p className="mb-4">
            The treatment involves a pen-like device with tiny needles that create controlled micro-injuries in the skin.
          </p>
          <p className="mb-4">
            These micro-injuries trigger the body’s natural healing response, leading to the production of new collagen and elastin fibers.
          </p>
          <p>
            The Dermapen treatment is effective in addressing various skin concerns, including fine lines, wrinkles, acne scars, and uneven skin texture. It is suitable for all skin types and requires minimal downtime.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "cold-peel",
      title: "Cold Peel",
      productImg: chemical,
      description: (
        <>
          <p className="mb-4">
            The Cold Peel is a non-invasive procedure that combines the power of exfoliation and cold therapy.
          </p>
          <p className="mb-4">
            It involves the application of a specially formulated solution that gently removes dead skin cells, unclogs pores, and evens out skin tone.
          </p>
          <p className="mb-4">
            The cold therapy component soothes and calms the skin, reducing redness and inflammation.
          </p>
          <p>
            This treatment is suitable for all skin types and can address various concerns, such as dullness, uneven skin tone, and texture irregularities.
          </p>
        </>
      ),
      showDetails: true,
    },
    {
      id: "hair-treatment",
      productImg: hair,
      title: "Hair Treatment",
      description: (
        <>
          <p className="mb-4">
            Hair treatments are designed to improve the quality of your hair. This is done through various ways, which include moisturizing the hair from the inside out, restoring and protecting your scalp, and boosting hair growth.
          </p>
          <p className="mb-4">
            Depending on your hair type and health, there are many types of hair treatments, and we’ll advise you on which type will be suitable for your hair.
          </p>
        </>
      ),
      showDetails: true,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#2c4755] mb-2">SERVICES</h2>
          <p className="text-gray-600 text-2xl">We Provide The Following Services</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="flex justify-center hover:scale-110 transition-all duration-300 flex-col items-center">
              <Image
                src={service.productImg}
                alt={service.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <h3 className="font-bold text-2xl text-center mt-2">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services
            .filter((service) => service.showDetails)
            .map((service) => (
              <div key={`${service.id}-details`} className="border border-gray-200 rounded-xl p-6 text-center shadow-xl">
                <h3 className="text-2xl font-semibold text-[#4a9cca] mb-6">{service.title}</h3>
                <div className="text-gray-600 text-xl font-medium">{service.description}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SpecificService
