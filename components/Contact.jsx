function Contact() {
    return (
        <section id="contato" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2">

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Entre em contato
                    </h2>

                    <p className="mt-4 text-lg text-gray-600 max-w-md"> 
                        Conte um pouco sobre seu projeto e retornaremos
                        com uma proposta personalizada.
                    </p>

                    <p className="mt-6 text-gray-500">
                        📍 Atendimento online para todo o Brasil
                    </p>
                </div>

                <form className="bg-white p-8 rounded-2xl shadow-md space-y-4">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                        type="email"
                        placeholder="Seu email"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <textarea
                        rows={4}
                        placeholder="Fale um pouco sobre seu projeto"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-800 py-3 font-semibold text-white hover:bg-blue-900 transition"
                    >
                        Enviar mensagem
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                        Ou fale direto pelo Whatsapp
                    </p>

                    <a
                        href="https://wa.me/5571986611534"
                        target="_blank"
                        className="block text-center rounded-xl border border-green-500 text-green-600 py-3 font-semibold hover:bg-green-50 transition"
                    >
                        Whatsapp
                    </a>
                </form>

            </div>
        </section>
    )
}

export default Contact;