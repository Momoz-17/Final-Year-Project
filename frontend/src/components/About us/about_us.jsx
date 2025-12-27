import React from "react";

const principles = [
  "To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world.",
  "To propagate a consciousness of Krishna (God), as it is revealed in the great scriptures of India, Bhagavad-gita and Srimad Bhagavatam.",
  "To bring the members of the Society together with each other and nearer to Krishna, the prime entity, thus developing the idea within the members and humanity at large, that each soul is part and parcel of the quality of Godhead (Krishna).",
  "To teach and encourage the Sankirtan movement (congregational chanting of the holy name of God), as revealed in the teachings of Lord Sri Chaitanya Mahaprabhu.",
  "To erect for the members and for society at large a holy place of transcendental pastimes dedicated to the personality of Krishna.",
  "To bring the members closer together for the purpose of teaching a simpler, more natural way of life.",
  "With a view towards achieving the aforementioned purposes, to publish and distribute periodicals, magazines, books and other writings."
];

const heritage = [
  {
    year: "1965",
    title: "The Journey",
    color: "orange-400",
    text: "Srila Prabhupada traveled from India to New York on a cargo ship, carrying only 40 rupees and the message of Bhakti yoga to the Western world."
  },
  {
    year: "1966",
    title: "The Founding",
    color: "green-600",
    text: "ISKCON was formally incorporated in New York City, starting from a small storefront, sparking a global spiritual revolution."
  },
  {
    year: "1977",
    title: "The Legacy",
    color: "orange-400",
    text: "By 1977, the movement had established over 108 temples, farm communities, and schools worldwide under the guidance of Srila Prabhupada."
  },
  {
    year: "1980s",
    title: "Food for Life",
    color: "green-600",
    text: "The movement expanded its social mission, launching Food for Life, which has now become the world’s largest vegetarian food relief program."
  },
  {
    year: "2000s",
    title: "Sustainable Living",
    color: "orange-400",
    text: "Transition towards eco-conscious spiritualism began, leading to award-winning projects like the Govardhan EcoVillage."
  },
  {
    year: "Today",
    title: "Global Impact",
    color: "green-600",
    text: "With over 600 centers globally, ISKCON continues to bridge ancient Vedic wisdom with modern sustainable living."
  }
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-[url('./src/assets/ground.png')] bg-cover bg-center opacity-60"></div>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white bg-green-900/80 px-6 py-4 rounded-lg">
          About <span className="text-orange-400">Govardhan EcoVillage</span>
        </h1>
      </section>

      <div className="max-w-5xl mx-auto p-8 space-y-16">

        {/* Who We Are */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-800">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            ISKCON — International Society for Krishna Consciousness — is a spiritual
            and cultural community dedicated to spreading the teachings of Lord Krishna
            and the principles of bhakti yoga worldwide. Founded by His Divine Grace
            A.C. Bhaktivedanta Swami Prabhupada in 1966, ISKCON now includes temples,
            rural communities, and educational projects across the globe.
          </p>
        </section>

        {/* Vision */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="./src/assets/sea.png"
            className="rounded-2xl shadow-2xl"
            alt=""
          />
          <div>
            <h3 className="text-2xl font-semibold text-green-700">Our Vision & Legacy</h3>
            <p className="mt-4 text-gray-700">
              Govardhan EcoVillage is a sustainable spiritual community and pilgrimage place
              inspired by Vedic wisdom. Managed under ISKCON’s guidance, the village blends
              spiritual practice with eco-friendly living, focusing on organic farming,
              cow protection, and rural development.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="./src/assets/sp.png"
            className="rounded-2xl shadow-2xl"
            alt=""
          />
          <div>
            <h3 className="text-2xl font-semibold text-green-700">Our Founder</h3>
            <p className="mt-4 text-gray-700">
              At the age of 69, Srila Prabhupada embarked on his mission to share the timeless
              wisdom of Vedic India with the world. With little more than a pair of hand cymbals
              and a suitcase of sacred translations, he crossed the Atlantic to New York City.
              In just eleven years, he established over 100 temples and translated more than
              80 volumes of Sanskrit texts, proving that simple living and high thinking can
              transform the world.
            </p>
          </div>
        </section>

        {/* History */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Our Heritage
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-4"></div>
          </div>

          <div className="flex overflow-x-auto pb-6 gap-8 snap-x snap-mandatory px-4 no-scrollbar">
            {heritage.map((item, i) => (
              <div
                key={i}
                className={`w-80 md:w-96 flex-shrink-0 snap-center bg-white p-8 rounded-2xl shadow-md border-t-4 ${item.color}`}
              >
                <span className="text-4xl font-black text-gray-200 italic">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold text-green-700 mt-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
            Our Core Principles
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className={`bg-white p-6 rounded-xl shadow-md flex gap-3 ${
                  i === principles.length - 1 ? "sm:col-span-2 max-w-3xl mx-auto" : ""
                }`}
              >
                <span className="text-2xl">🪶</span>
                <p className="text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters */}
        <section className="text-center bg-green-50 p-10 rounded-3xl">
          <h2 className="text-3xl font-bold text-green-800">Why It Matters</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            In today’s world, spiritual direction and environmental balance are essential.
            We help individuals connect with deeper values of love, compassion, and inner
            harmony through conscious living and devotional practice.
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
