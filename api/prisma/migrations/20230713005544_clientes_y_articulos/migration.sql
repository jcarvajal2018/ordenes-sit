-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "razonsocial" TEXT NOT NULL,
    "credito" INTEGER,
    "limite" INTEGER,
    "plazo" INTEGER,
    "saldo" INTEGER,
    "bloqueado" INTEGER,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Articulo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "medida" TEXT,
    "barra" TEXT,
    "equivalente" TEXT,
    "grupoUnidad" INTEGER,
    "unidadGrupo" REAL,
    "tipoDescarga" INTEGER,
    "combo" INTEGER,
    "herencia" INTEGER,
    "existencia" INTEGER,
    "descuento" REAL,
    "precio1" REAL,
    "precio2" REAL,
    "precio3" REAL,
    "codiva" TEXT NOT NULL,
    "piva" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_codigo_key" ON "Cliente"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_nombre_key" ON "Cliente"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Articulo_codigo_key" ON "Articulo"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Articulo_descripcion_key" ON "Articulo"("descripcion");
