import { Link } from "react-router";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <div className="container-shell py-6 md:py-8">
         

          <nav className="mt-6 flex items-center gap-2 text-sm text-muted">
            <Link to="/aylin" className="text-foreground">
              Inicio
            </Link>
            <span>›</span>
            <span>Contacto</span>
          </nav>

          <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <aside className="space-y-6">
              <article className="editorial-card p-6">
                <h2 className="mb-4 text-[1.5rem]">Información de contacto</h2>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="mb-1 inline-flex items-center gap-2 font-bold text-foreground">
                      <Mail size={16} />
                      Correo
                    </p>
                    <a
                      href="mailto:hola@aylin.com"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      hola@aylin.com
                    </a>
                  </div>

                  <div>
                    <p className="mb-1 inline-flex items-center gap-2 font-bold text-foreground">
                      <Phone size={16} />
                      Teléfono
                    </p>
                    <a
                      href="tel:+525512345678"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      +52 55 1234 5678
                    </a>
                  </div>

                  <div>
                    <p className="mb-1 inline-flex items-center gap-2 font-bold text-foreground">
                      <MapPin size={16} />
                      Ubicación
                    </p>
                    <p className="text-muted">
                      Iguala de la Independencia, Guerrero, México
                    </p>
                  </div>
                </div>
              </article>

              <article className="feature-card p-6">
                <h3 className="mb-3 inline-flex items-center gap-2 font-sans text-lg font-bold">
                  <Clock3 size={18} />
                  Horario de atención
                </h3>

                <p className="text-sm leading-7">
                  Lunes a viernes: 9:00 AM – 6:00 PM
                  <br />
                  Sábado: 10:00 AM – 2:00 PM
                  <br />
                  Domingo: Cerrado
                </p>
              </article>

              <article className="editorial-card p-6">
                <h3 className="mb-3 font-sans text-lg font-bold">
                  Tiempo de respuesta
                </h3>
                <p className="text-sm text-muted">
                  Normalmente respondemos dentro de 24 horas hábiles.
                </p>
              </article>
            </aside>

            <section className="modal-card p-6 md:p-8">
              <h2 className="mb-2 text-[1.6rem]">Envíanos un mensaje</h2>
              <p className="mb-6 text-sm text-muted">
                Completa el formulario y te responderemos por correo.
              </p>

              <form className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="input-editorial"
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="mb-2 block text-sm font-medium">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    className="input-editorial"
                    placeholder="tucorreo@ejemplo.com"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="motivo" className="mb-2 block text-sm font-medium">
                    Motivo
                  </label>
                  <select
                    id="motivo"
                    name="motivo"
                    className="input-editorial"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="general">Consulta general</option>
                    <option value="familia">Tema sobre mi familia</option>
                    <option value="carrera">Tema sobre mi carrera</option>
                    <option value="colaboracion">Colaboración</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    className="input-editorial resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte"
                  />
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button type="submit" className="btn-primary inline-flex items-center gap-2">
                    <Send size={16} />
                    Enviar mensaje
                  </button>

                  <a href="mailto:hola@aylin.com" className="btn-ghost">
                    Escribir por correo
                  </a>
                </div>
              </form>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}