enum Genero {
    Accion = "Accion",
    Comedia = "Comedia",
  }
  
  class Tipo {
    constructor(public accion: boolean, public comedia: boolean) {}
  }
  
  class Pelicula {
    private _nombre: string;
    private _director: string;
    private _genero: Genero;
    private _duracion: number;
    private _año: number;
    private _calificacion: number;
    private _disponible: boolean;
  
    constructor(
      nombre: string,
      director: string,
      genero: Genero,
      duracion: number,
      año: number,
      calificacion: number,
      disponible: boolean = true
    ) {
      this._nombre = nombre;
      this._director = director;
      this._genero = genero;
      this._duracion = duracion;
      this._año = año;
      this._calificacion = calificacion;
      this._disponible = disponible;
    }
  
    // Setters
    set nombre(value: string) {
      this._nombre = value;
    }
  
    set director(value: string) {
      this._director = value;
    }
  
    set genero(value: Genero) {
      this._genero = value;
    }
  
    set duracion(value: number) {
      this._duracion = value;
    }
  
    set año(value: number) {
      this._año = value;
    }
  
    set calificacion(value: number) {
      this._calificacion = value;
    }
  
    set disponible(value: boolean) {
      this._disponible = value;
    }
  
    // Getters
    get nombre() {
      return this._nombre;
    }
  
    get director() {
      return this._director;
    }
  
    get genero() {
      return this._genero;
    }
  
    get duracion() {
      return this._duracion;
    }
  
    get año() {
      return this._año;
    }
  
    get calificacion() {
      return this._calificacion;
    }
  
    get disponible() {
      return this._disponible;
    }
  
    // Resto de métodos...
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Director: ${this.director}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Duración: ${this.duracion} minutos`);
        console.log(`Año: ${this.año}`);
        console.log(`Calificación: ${this.calificacion}`);
        console.log(`Disponible: ${this.disponible ? "Sí" : "No"}`);
      }
    
      EsPeliculaEpica() {
        return this.duracion >= 150 && this.calificacion >= 8;
      }
    
      calcularValoracion() {
        return this.calificacion * 2;
      }
    
      esSimilar(pelicula: Pelicula): boolean {
        return this.genero === pelicula.genero && Math.abs(this.año - pelicula.año) <= 5;
      }
    
      alquilarPelicula() {
        if (this.disponible) {
          this.disponible = false;
          console.log(`¡Has alquilado la película "${this.nombre}"!`);
        } else {
          console.log(`La película "${this.nombre}" no está disponible para alquilar.`);
        }
      }
      static MostrarCarteleraDisponible(peliculas: Pelicula[]) {
          const peliculasDisponibles = peliculas.filter(pelicula => pelicula.disponible);
          
          if (peliculasDisponibles.length > 0) {
            console.log("Películas disponibles:");
            for (const pelicula of peliculasDisponibles) {
              console.log(`- ${pelicula.nombre}`);
            }
          } else {
            console.log("K epico, no hay películas disponibles mi pana.");
          }
        }
      }
    
    // Creación de objetos Pelicula
  
    let tipoAccion = new Tipo(true, false);
    let tipoComedia = new Tipo(false, true);
    
    let pelicula1 = new Pelicula("Aventura Espacial", "John Director", Genero.Accion, 180, 2022, 9);
    let pelicula2 = new Pelicula("Risas en la Playa", "Jane Directora", Genero.Comedia, 120, 2023, 7);
    
    // Uso de los métodos y funcionalidades
    pelicula1.imprimir();
    console.log("¿Es película épica?:", pelicula1.EsPeliculaEpica());
    console.log("Valoración:", pelicula1.calcularValoracion());
    console.log("¿Es similar a película2?: ", pelicula1.esSimilar(pelicula2));
    
    pelicula1.alquilarPelicula();
    
    
    Pelicula.MostrarCarteleraDisponible([pelicula1, pelicula2]);

  

  
