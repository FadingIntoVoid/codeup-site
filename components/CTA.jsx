function CTA() {
    return (
        <section id="sobre" className="py-20 bg-blue-800 text-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Vamos tirar seu projeto do papel?
                </h2>

                <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
                    Desenvolvemos sites modernos, rápidos e focados em resultados.
                    Solicite um orçamento sem compromisso.
                </p>

                <a
                    href="#contato"
                    className="mt-10 inline-flex items-center justify-center rounded-2xl bg-white px-12 py-4 text-lg font-semibold text-blue-800 shadow-xl hover:scale-[1.03] hover:bg-gray-100 transition"
                >
                    Solicitar orçamento
                </a>

                <p className="mt-4 text-sm text-blue-200">
                    Sem compromisso • Resposta em até 24h
                </p>
            </div>
        </section>
    );
}

export default CTA;