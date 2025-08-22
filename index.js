let librosColeccion = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    formato: "Tapadura",
    estado: "Nuevo",
    idioma: "Español",
    precio: 25.99,
    descripcion: "Una obra maestra del realismo mágico sobre la familia Buendía en Macondo.",
    ubicacion: "Estantería A1",
    fechaPublicacion: "1967-05-30",
    editorial: "Sudamericana",
    paginas: 496,
    dimensiones: "15 x 3 x 23 cm",
    peso: "0.65 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0307474728",
    generos: ["Realismo mágico", "Ficción literaria"]
  },
  {
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    formato: "Digital",
    estado: "Nuevo",
    idioma: "Alemán",
    precio: 8.99,
    descripcion: "Un hombre que despierta convertido en insecto.",
    ubicacion: "Biblioteca Virtual",
    fechaPublicacion: "1915-01-01",
    editorial: "Sudamericana",
    paginas: 74,
    dimensiones: "Archivo EPUB",
    peso: "1 MB",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0553213690",
    generos: ["Surrealismo", "Existencialismo", "Clásico"]
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    formato: "Tapadura",
    estado: "Excelente",
    idioma: "Español",
    precio: 30.50,
    descripcion: "La historia del ingenioso hidalgo que enloqueció leyendo libros de caballerías.",
    ubicacion: "Estantería B2",
    fechaPublicacion: "1605-01-16",
    editorial: "Sudamericana",
    paginas: 863,
    dimensiones: "17 x 5 x 24 cm",
    peso: "1.2 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-8491050293",
    generos: ["Clásico", "Sátira", "Aventura"]
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    formato: "Tapa blanda",
    estado: "Bueno",
    idioma: "Inglés",
    precio: 12.99,
    descripcion: "Una crítica social y romántica en la Inglaterra georgiana.",
    ubicacion: "Estantería C1",
    fechaPublicacion: "1813-01-28",
    editorial: "Sudamericana",
    paginas: 432,
    dimensiones: "14 x 2.5 x 21 cm",
    peso: "0.5 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0141439518",
    generos: ["Romance", "Clásico", "Drama"]
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    formato: "Digital",
    estado: "Nuevo",
    idioma: "Inglés",
    precio: 9.99,
    descripcion: "Una distopía sobre un régimen totalitario y la vigilancia extrema.",
    ubicacion: "Biblioteca Virtual",
    fechaPublicacion: "1949-06-08",
    editorial: "Sudamericana",
    paginas: 328,
    dimensiones: "Archivo PDF",
    peso: "2 MB",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0451524935",
    generos: ["Distopía", "Política", "Ciencia ficción"]
  },
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    formato: "Tapadura",
    estado: "Usado",
    idioma: "Francés",
    precio: 15.00,
    descripcion: "Un cuento filosófico disfrazado de literatura infantil.",
    ubicacion: "Estantería D4",
    fechaPublicacion: "1943-04-06",
    editorial: "Reynal & Hitchcock",
    paginas: 96,
    dimensiones: "12 x 1 x 19 cm",
    peso: "0.2 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0156012195",
    generos: ["Fábula", "Filosofía", "Infantil"]
  },
  {
    titulo: "Moby Dick",
    autor: "Herman Melville",
    formato: "Tapa blanda",
    estado: "Bueno",
    idioma: "Inglés",
    precio: 18.99,
    descripcion: "La obsesiva persecución de una ballena blanca por el capitán Ahab.",
    ubicacion: "Estantería E2",
    fechaPublicacion: "1851-10-18",
    editorial: "Reynal & Hitchcock",
    paginas: 635,
    dimensiones: "15 x 4 x 23 cm",
    peso: "0.8 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-1503280786",
    generos: ["Aventura", "Clásico", "Marítimo"]
  },
  {
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoyevski",
    formato: "Tapadura",
    estado: "Excelente",
    idioma: "Ruso",
    precio: 22.50,
    descripcion: "Un joven estudiante comete un asesinato y enfrenta su conciencia.",
    ubicacion: "Estantería F1",
    fechaPublicacion: "1866-01-01",
    editorial: "Reynal & Hitchcock",
    paginas: 671,
    dimensiones: "16 x 4 x 24 cm",
    peso: "1 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0486415871",
    generos: ["Psicológica", "Filosofía", "Crimen"]
  },
  {
    titulo: "Hamlet",
    autor: "William Shakespeare",
    formato: "Tapa blanda",
    estado: "Usado",
    idioma: "Inglés",
    precio: 10.75,
    descripcion: "Una tragedia sobre el príncipe de Dinamarca y su dilema existencial.",
    ubicacion: "Estantería G3",
    fechaPublicacion: "1603-07-26",
    editorial: "Reynal & Hitchcock",
    paginas: 342,
    dimensiones: "14 x 2 x 20 cm",
    peso: "0.45 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0743477123",
    generos: ["Tragedia", "Clásico", "Drama"]
  },
  {
    titulo: "Ulises",
    autor: "James Joyce",
    formato: "Tapadura",
    estado: "Nuevo",
    idioma: "Inglés",
    precio: 28.00,
    descripcion: "Un día en la vida de Leopold Bloom en Dublín.",
    ubicacion: "Estantería H2",
    fechaPublicacion: "1922-02-02",
    editorial: "Reynal & Hitchcock",
    paginas: 730,
    dimensiones: "17 x 5 x 24 cm",
    peso: "1.3 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-1840226355",
    generos: ["Modernismo", "Clásico", "Experimental"]
  },
  {
    titulo: "En busca del tiempo perdido",
    autor: "Marcel Proust",
    formato: "Tapadura",
    estado: "Bueno",
    idioma: "Francés",
    precio: 35.99,
    descripcion: "Una exploración del tiempo, la memoria y la experiencia personal.",
    ubicacion: "Estantería I4",
    fechaPublicacion: "1913-11-14",
    editorial: "Gallimard",
    paginas: 4215,
    dimensiones: "20 x 12 x 25 cm",
    peso: "3 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-2070111274",
    generos: ["Modernismo", "Memoria", "Clásico"]
  },
  {
    titulo: "La divina comedia",
    autor: "Dante Alighieri",
    formato: "Tapadura",
    estado: "Excelente",
    idioma: "Italiano",
    precio: 27.99,
    descripcion: "Un viaje alegórico por el infierno, purgatorio y paraíso.",
    ubicacion: "Estantería J1",
    fechaPublicacion: "1320-01-01",
    editorial: "Gallimard",
    paginas: 798,
    dimensiones: "16 x 4 x 23 cm",
    peso: "1.1 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0142437223",
    generos: ["Poesía", "Épico", "Religioso"]
  },
  {
    titulo: "El extranjero",
    autor: "Albert Camus",
    formato: "Tapa blanda",
    estado: "Nuevo",
    idioma: "Francés",
    precio: 14.00,
    descripcion: "Un hombre indiferente enfrenta el absurdo tras un asesinato.",
    ubicacion: "Estantería K3",
    fechaPublicacion: "1942-01-01",
    editorial: "Gallimard",
    paginas: 123,
    dimensiones: "13 x 1.5 x 20 cm",
    peso: "0.3 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0679720201",
    generos: ["Existencialismo", "Filosofía", "Clásico"]
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    formato: "Tapadura",
    estado: "Excelente",
    idioma: "Español",
    precio: 21.99,
    descripcion: "Una novela experimental que permite múltiples formas de lectura.",
    ubicacion: "Estantería L2",
    fechaPublicacion: "1963-01-01",
    editorial: "Gallimard",
    paginas: 600,
    dimensiones: "15 x 3.5 x 22 cm",
    peso: "0.9 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-8437604947",
    generos: ["Experimental", "Filosofía", "Narrativa"]
  },
  {
    titulo: "Fausto",
    autor: "Johann Wolfgang von Goethe",
    formato: "Tapa blanda",
    estado: "Usado",
    idioma: "Alemán",
    precio: 17.50,
    descripcion: "La historia de un hombre que vende su alma al diablo a cambio de conocimiento.",
    ubicacion: "Estantería M5",
    fechaPublicacion: "1808-01-01",
    editorial: "Gallimard",
    paginas: 462,
    dimensiones: "14 x 3 x 21 cm",
    peso: "0.6 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0140449013",
    generos: ["Tragedia", "Filosofía", "Clásico"]
  },
  {
    titulo: "El nombre de la rosa",
    autor: "Umberto Eco",
    formato: "Tapadura",
    estado: "Bueno",
    idioma: "Italiano",
    precio: 24.99,
    descripcion: "Un monasterio medieval, asesinatos y un misterio intelectual.",
    ubicacion: "Estantería N1",
    fechaPublicacion: "1980-01-01",
    editorial: "Bompiani",
    paginas: 512,
    dimensiones: "16 x 4 x 23 cm",
    peso: "0.95 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0156001311",
    generos: ["Misterio", "Histórico", "Filosofía"]
  },
  {
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    formato: "Tapa blanda",
    estado: "Nuevo",
    idioma: "Español",
    precio: 13.50,
    descripcion: "Un joven viaja al pueblo fantasma de Comala en busca de su padre.",
    ubicacion: "Estantería O4",
    fechaPublicacion: "1955-01-01",
    editorial: "Bompiani",
    paginas: 124,
    dimensiones: "13 x 1.5 x 20 cm",
    peso: "0.25 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-6071618920",
    generos: ["Realismo mágico", "Clásico", "Narrativa"]
  },
  {
    titulo: "Los miserables",
    autor: "Victor Hugo",
    formato: "Tapadura",
    estado: "Excelente",
    idioma: "Francés",
    precio: 29.99,
    descripcion: "La historia de Jean Valjean y la lucha por la redención en una Francia convulsa.",
    ubicacion: "Estantería P3",
    fechaPublicacion: "1862-01-01",
    editorial: "Bompiani",
    paginas: 1463,
    dimensiones: "19 x 6 x 26 cm",
    peso: "2.5 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0451419439",
    generos: ["Histórico", "Drama", "Clásico"]
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    formato: "Tapa blanda",
    estado: "Bueno",
    idioma: "Inglés",
    precio: 16.50,
    descripcion: "El clásico relato del conde Drácula y su intento de trasladarse a Inglaterra.",
    ubicacion: "Estantería Q2",
    fechaPublicacion: "1897-05-26",
    editorial: "Bompiani",
    paginas: 418,
    dimensiones: "14 x 2.5 x 21 cm",
    peso: "0.55 kg",
    fechaAgregado: new Date().toISOString(),
    ISBN: "978-0486411095",
    generos: ["Terror", "Gótico", "Clásico"]
  }
];
const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,    
        output: process.stdout,
        terminal: true   
    });
    Menu();
    
    function Menu() {
        console.log ("Menu Interactivo")
        console.log (" 1. Mostrar Coleccion")
        console.log (" 2. Agregar libro")
        console.log (" 3. quitar libros")
        console.log (" 4. Estadisticas de los libros")
        console.log (" 5. Editoriales")
        console.log(" 6. salir del sistema")

        rl.question ("Elige una de los opciones: ", (opcion) =>  {
            switch (opcion) {
                case "1" :
                    mostrarLibros();
                    Menu();

                    break
                case "2" :
                    agregarLibro();
                    break
                case "3" :
                    eliminarLibro();
                    break
                case "4" :
                    mostrarEstadisticas();
                    break
                case "5":
                  Editoriales ();
                  Menu();
                    break
                case "6" :
                    console.log ("Adios")
                    rl.close();
                    break
                    default: 
                    console.log("Intenta otra opcion")
                    break;

             }
        })
        function mostrarLibros () {
           console.table (
            librosColeccion.map (librosColeccion => ({
                titulo: librosColeccion.titulo,
                autor: librosColeccion.autor,
                genero: librosColeccion.generos,
                precio: librosColeccion.precio,
                estado: librosColeccion.estado
            }))
           )
        }
        function agregarLibro () {       
            console.log ("Agrega un libro: ")
                    rl.question("Título: ", (titulo) => {
          rl.question("Autor: ", (autor) => {
            rl.question("Formato (Tapadura, Digital, Audiolibro): ", (formato) => {
              rl.question("Estado (Nuevo, Usado, Excelente, Bueno): ", (estado) => {
                rl.question("Idioma (Español, Inglés, Francés, Alemán, Italiano, Portugués): ", (idioma) => {
                  rl.question("Precio (USD): ", (precio) => {
                    rl.question("ISBN : ", (ISBN) => {
                      rl.question("Descripción: ", (descripcion) => {
                        rl.question("Ubicación: ", (ubicacion) => {
                          rl.question("Fecha de publicación (YYYY-MM-DD): ", (fechaPublicacion) => {
                            rl.question("Editorial: ", (editorial) => {
                              rl.question("Número de páginas: ", (paginas) => {
                                rl.question("Dimensiones (ej: 15 x 3 x 23 cm): ", (dimensiones) => {
                                  rl.question("Peso (ej: 0.65 kg): ", (peso) => {
                                    rl.question("Géneros literarios (separados por coma): ", (generosInput) => {
                                      
                                      const nuevoLibro = {
                                        titulo,
                                        autor,
                                        formato,
                                        estado,
                                        idioma,
                                        precio: parseFloat(precio),
                                        ISBN,
                                        descripcion,
                                        ubicacion,
                                        fechaPublicacion,
                                        editorial,
                                        paginas: parseInt(paginas),
                                        dimensiones,
                                        peso,
                                        fechaAgregado: new Date().toISOString(),
                                        generos: generosInput.split(",").map((g) => g.trim()),
                                      };

                                      librosColeccion.push(nuevoLibro);
                                      console.log("Libro agregado con éxito :)");
                                      Menu();
                                           });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
            });
          });
        }
        function eliminarLibro () {
            if (librosColeccion.length > 0) {
                    const eliminado = librosColeccion.pop();
                    console.log(`Libro eliminado exitosamente: ${eliminado.titulo}`);
                }else {
                    console.log ("ningun libro encontrado para eliminar");
                }
                Menu();
        }
        function mostrarEstadisticas () {
            console.table (
                librosColeccion.map ( librosColeccion => ({
                    titulo: librosColeccion.titulo,
                    autor: librosColeccion.autor,
                    formato: librosColeccion.formato,
                    editorial: librosColeccion.editorial,
                    descripcion: librosColeccion.descripcion,
                    paginas: librosColeccion.paginas,
                    dimensiones: librosColeccion.dimensiones,
                    genero: librosColeccion.generos,
                    fechaPublicacion: librosColeccion.SfechaPublicacion,
                    fechaAgregado: librosColeccion.fechaAgregado,
                    idioma: librosColeccion.idioma
                    
                }))
            )
            Menu();
        }

        function Editoriales () {
          const editorial = librosColeccion.reduce((acumulador, libro) => {
            if (!acumulador [libro.editorial]) {
              acumulador[libro.editorial] = [];
            }
            acumulador[libro.editorial].push(libro.titulo);
            return acumulador;
          }, {});
          console.table(editorial)
        }
        
    }