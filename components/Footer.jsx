function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

                <div>
                    <img src="/logo-codeup-ok.png" alt="CodeUp" className="h-16 w-auto"></img>

                    <p className="mt-4 text-gray-400 max-w-sm">
                        Criamos experiências digitais modernas, rápidas e focadas
                        em resultados para empresas que querem crescer.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Navegação
                    </h4>

                    <ul className="space-y-2">
                        <li>
                            <a href="#inicio" className="hover:text-white transition">
                                Início
                            </a>
                        </li>

                        <li>
                            <a href="#servicos" className="hover:text-white transition">
                                Serviços
                            </a>
                        </li>

                        <li>
                            <a href="#contato" className="hover:text-white transition">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Contato
                    </h4>

                    <p className="text-gray-400">
                        📧 contato@codeup.dev
                    </p>

                    <p className="mt-2 text-gray-400">
                        📱 WhatsApp
                    </p>
                </div>

            </div>

            <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} CodeUp. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer;