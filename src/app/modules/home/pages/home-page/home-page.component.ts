import { Component, OnInit, resolveForwardRef } from '@angular/core';

//declare var onBoarding:any;
declare var require: any;
var incode = require("@assets/onBoarding.js");

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {
    
    const onBoarding = incode.create({
      clientId: "microformas536",
      apiURL: 'https://demo-api.incodesmile.com/',
      lang:  "es",
      theme: {
        main: "",
        mainButton: {
          background: "#F07E29",
          borderRadius: "8px",
          color: "#FFFFFF",
          border: "",
        },
      },
      translations:{
        "tutorial": {
          "front1": "Alinea tu teléfono paralelamente a tu Identificación",
          "front2": "Se hará una captura automática",
          "back1": "Ahora escanea el ",
          "back2": "reverso ",
          "back3": "de tu ID",
          "selfie1": "Tomemos una selfie",
          "selfie2": "Mantén una expresión neutra, encuentra buen",
          "selfie3": "balance de luz y quítate lentes y gorras",
          "passport1": "Alínea tu pasaporte con el marco y toma la foto",
          "passport2": "Enfoca solo la página con tu foto"
        },
        "notifications": {
          "showFront": {
            "one": "Presenta el frente de tu ID"
          },
          "showBack": {
            "one": "Presenta el reverso de tu ID",
            "pdf417": "Buscando el barcode"
          },
          "showFrontLowEnd": {
            "one": "Acerca tu ID para llenar el recuadro"
          },
          "showBackLowEnd": {
            "one": "Acerca tu ID para llenar el recuadro"
          },
          "showUtilityBill": {
            "one": "Muestra tu ",
            "two": "comprobante de domicilio",
            "three": "Posiciónalo verticalmente"
          },
          "selfie": {
            "one": "Ve a la cámara",
            "two": "para verificar que eres tú"
          },
          "showPassport": "Presenta tu pasaporte",
          "moveCloser": "Acércate a la cámara",
          "tooManyFaces": "Más de una cara",
          "centerFace": "Centrar la cara",
          "moveIdCloser": "Acércala",
          "fitOverlay": "Acerca la credencial para llenar el recuadro",
          "couldntCapture": "No se pudo capturar.",
          "moveSomewhere": "Intenta moverte a otro lado",
          "anId": " una credencial",
          "verifyLater": "Lo verificaremos después",
          "idRejected": "credencial rechazada. Intenta otra vez.",
          "autoCapturing": "Auto captura. No te muevas.",
          "uploadingId": "Subiendo tu credencial",
          "uploadSuccess": "Subida exitosa.",
          "dontMove": "¡No te muevas!",
          "getReady": "Prepárate…",
          "uploading": "Subiendo...",
          "done": "¡Listo!",
          "takingPhoto": "Tomando la foto.",
          "moveAway": "Aléjate",
          "theCamera": "de la cámara",
          "likeFake": "ID falsa",
          "face": "No se detectó cara",
          "brightness": "Mala iluminación",
          "lenses": "Lentes detectados",
          "mask": "Mascara detectada",
          "spoof": "Intenta en otro lugar",
          "noMatch": "Sin coincidencia facial, prueba de nuevo ",
          "multiple": "Más de una cara detectada",
          "error": "Error. Intenta de nuevo.",
          "shadowDectected": "Sombra detectada",
          "success": "¡Éxito!",
          "serverError": "Error del servidor",
          "glareDetected": "Destello detectado",
          "glareDetectedChange": "Cambia las condiciones de luz",
          "classificationFailed": "Clasificación fallida",
          "passportClassificationFailed": "Falló la prueba del pasaporte",
          "frontClassificationFailed": "Falló la prueba del frente de la credencial",
          "backClassificationFailed": "Falló la prueba del reverso de la credencial",
          "lowSharpness": "Baja nitidez",
          "outOfFocus": "Cámara desenfocada",
          "outOfFocusChange": "Verifica las condiciones de captura y el lente de tu dispositivo",
          "lowResolution": "Baja resolución",
          "portrait": "La imagen no es portaretrato",
          "wrongDocument": "El escaneo del pasaporte falló",
          "crop": "Recorde de imagen muy pequeño",
          "unableToCrop": "No se pudo recortar la cara",
          "fillRectangle": {
            "one": "Llena el rectángulo",
            "two": "con la credencial"
          },
          "badProofOfAddress": "No se encontró el comprobante",
          "switchToNative": "Cambiando a cámara nativa",
          "processing": "Procesando..."
        }
      }
    })
    
   }

  ngOnInit(): void {
  }

}
