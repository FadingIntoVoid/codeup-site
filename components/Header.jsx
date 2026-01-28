import { useState } from "react";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <img
                    src="/logo-codeup-ok.png"
                    alt="CodeUp"
                    className="h-14 w-auto"
                />

                {/* MENU DESKTOP */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <a href="#inicio" className="hover:text-gray-900 transition">Início</a>
                    <a href="#servicos" className="hover:text-gray-900 transition">Serviços</a>
                    <a href="#sobre" className="hover:text-gray-900 transition">Sobre</a>
                    <a href="#contato" className="hover:text-gray-900 transition">Contato</a>
                </nav>

                {/* CTA DESKTOP */}
                <a
                    href="#contato"
                    className="hidden md:inline-flex rounded-xl bg-blue-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-900 transition"
                >
                    Solicitar orçamento
                </a>

                {/* BOTÃO MOBILE */}
                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* MENU MOBILE */}
            {menuAberto && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700">
                        <a href="#inicio" onClick={() => setMenuAberto(false)}>Início</a>
                        <a href="#servicos" onClick={() => setMenuAberto(false)}>Serviços</a>
                        <a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a>
                        <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>

                        <a
                            href="#contato"
                            className="mt-4 rounded-xl bg-blue-800 px-6 py-3 text-center font-semibold text-white"
                        >
                            Solicitar orçamento
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;