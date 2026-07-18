const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const municipios = require("./municipios");
const {
    sexos,
    actividadesFisicas,
    tratamientos
} = require("./catalogos");

const {
    random,
    randomInt,
    randomItem,
    porcentaje
} = require("./helpers");


// Cantidad de pacientes
const TOTAL_REGISTROS = 5000;

const OUTPUT_DIR = path.join(
    __dirname,
    "..",
    "dataset"
);

// ----------------------
// Generadores
// ----------------------

function generarFecha() {

    const inicio = new Date("2023-01-01");
    const fin = new Date("2026-12-31");

    const fecha = new Date(
        inicio.getTime() +
        Math.random() *
        (fin.getTime() - inicio.getTime())
    );

    return fecha.toISOString().split("T")[0];
}


function generarEdad() {

    const prob = Math.random();

    if (prob < 0.18)
        return randomInt(18,30);

    if (prob < 0.46)
        return randomInt(31,45);

    if (prob < 0.76)
        return randomInt(46,60);

    if (prob < 0.94)
        return randomInt(61,75);

    return randomInt(76,90);

}


function generarPaciente(id) {

    const edad = generarEdad();

    const sexo = randomItem(sexos);

    const municipio = randomItem(municipios);


    // Diabetes
    const tieneDiabetes = porcentaje(0.35);


    let tipoDiabetes = "No aplica";
    let aniosDiagnostico = 0;


    if(tieneDiabetes){

        tipoDiabetes = porcentaje(0.10)
            ? "Tipo 1"
            : "Tipo 2";


        aniosDiagnostico = randomInt(
            1,
            Math.max(2, edad - 15)
        );

    }



    // Medidas físicas

    const estatura = Number(
        random(1.45,1.90)
        .toFixed(2)
    );


    const peso = Number(
        random(48,125)
        .toFixed(1)
    );


    const imc = Number(
        (
            peso /
            (estatura * estatura)
        )
        .toFixed(1)
    );


    const obesidad = imc >= 30
        ? "Sí"
        : "No";



    // Glucosa

    let glucosa;


    if(!tieneDiabetes){

        glucosa = randomInt(70,110);

    }
    else if(tipoDiabetes === "Tipo 1"){

        glucosa = randomInt(150,320);

    }
    else{

        glucosa = randomInt(126,280);

    }



    // HbA1c

    let hbA1c;


    if(!tieneDiabetes){

        hbA1c = Number(
            random(4.8,5.9)
            .toFixed(1)
        );

    }
    else{

        hbA1c = Number(
            random(6.5,12)
            .toFixed(1)
        );

    }



    // Hipertensión

    let hipertension = false;


    if(edad >= 60)
        hipertension = porcentaje(0.50);


    if(imc >= 30)
        hipertension = porcentaje(0.60);


    if(tieneDiabetes)
        hipertension = porcentaje(0.55);



    const taSis = hipertension
        ? randomInt(140,180)
        : randomInt(105,130);


    const taDia = hipertension
        ? randomInt(90,110)
        : randomInt(60,85);



    // Tratamiento

    let tratamiento = "Ninguno";


    if(tieneDiabetes){

        if(tipoDiabetes === "Tipo 1"){

            tratamiento = "Insulina";

        }
        else{

            tratamiento = randomItem([
                "Metformina",
                "Metformina+Insulina",
                "Sulfonilurea",
                "GLP-1",
                "iSGLT2",
                "DPP-4"
            ]);

        }

    }



    return {

        ID:id,

        Edad:edad,

        Sexo:sexo,

        Municipio:municipio,


        Tiene_Diabetes:
            tieneDiabetes
            ? "Sí"
            : "No",


        Tipo_Diabetes:typeDiabetesFix(tipoDiabetes),


        Anios_Diagnostico:aniosDiagnostico,


        Peso_kg:peso,

        Estatura_m:estatura,

        IMC:imc,


        Glucosa_Ayuno:glucosa,

        HbA1c:hbA1c,


        TA_Sis:Math.round(taSis),

        TA_Dia:Math.round(taDia),


        Colesterol:
            randomInt(140,260),


        Trigliceridos:
            randomInt(50,300),


        Actividad_Fisica:
            randomItem(actividadesFisicas),


        Fumador:
            porcentaje(0.22)
            ? "Sí"
            : "No",


        Hipertension:
            hipertension
            ? "Sí"
            : "No",


        Obesidad:obesidad,


        Tratamiento:tratamiento,


        Fecha_Consulta:
            generarFecha()

    };

}


// evita typo si no aplica
function typeDiabetesFix(tipo){

    return tipo;

}



// ----------------------
// Crear dataset
// ----------------------

const pacientes = [];


for(let i = 1; i <= TOTAL_REGISTROS; i++){

    pacientes.push(
        generarPaciente(i)
    );

}


if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}



// CSV

const csv = [
    Object.keys(pacientes[0]).join(","),
    ...pacientes.map(
        p =>
        Object.values(p)
        .map(v => `"${v}"`)
        .join(",")
    )
]
.join("\n");


fs.writeFileSync(
    path.join(
        OUTPUT_DIR,
        "pacientes_diabetes_puebla.csv"
    ),
    csv,
    "utf8"
);



console.log(
    `Dataset generado: ${TOTAL_REGISTROS} pacientes`
);