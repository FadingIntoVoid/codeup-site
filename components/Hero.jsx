function Hero() {
  return (
    <section id="inicio" className="pt-32 min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-gray-50 to-white">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
        Sua presença digital <br />
        <span className="text-blue-800">começa aqui.</span>
      </h2>

      <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
        Sites rápidos, modernos e pensados para converter. Tudo que sua empresa precisa para se destacar na internet.
      </p>

      <a
        href="#contato"
        className="mt-10 inline-flex rounded-xl items-center justify-center bg-blue-800 text-white px-10 py-4 text-lg font-semibold hover:bg-blue-900 transition shadow-lg"
      >
        Começar agora
      </a>
    </section>
  );
}

export default Hero;