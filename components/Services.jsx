import { Monitor, LayoutTemplate, Settings } from "lucide-react";

function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900">
                    Nossos serviços
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Soluções digitais pensadas para gerar resultados reais
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {[
                    { icon: "💻", title: "Sites Profissionais", text: "Sites rápidos, responsivos e focados em conversão." },
                    { icon: "🚀", title: "Landing Pages", text: "Páginas criadas para vender e captar leads." },
                    { icon: "⚙️", title: "Manutenção", text: "Atualizações, melhorias e suporte contínuo." }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-blue-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="text-4xl mb-6">{item.icon}</div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-base leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
}

export default Services;