/*
  Warnings:

  - You are about to drop the column `codigo` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Articulo` table. All the data in the column will be lost.
  - Added the required column `cliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articulo` to the `Articulo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "razonsocial" TEXT NOT NULL,
    "credito" INTEGER,
    "limite" INTEGER,
    "plazo" INTEGER,
    "saldo" INTEGER,
    "bloqueado" INTEGER
);
INSERT INTO "new_Cliente" ("bloqueado", "credito", "id", "limite", "nombre", "plazo", "razonsocial", "saldo") SELECT "bloqueado", "credito", "id", "limite", "nombre", "plazo", "razonsocial", "saldo" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_cliente_key" ON "Cliente"("cliente");
CREATE UNIQUE INDEX "Cliente_nombre_key" ON "Cliente"("nombre");
CREATE TABLE "new_Articulo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "articulo" TEXT NOT NULL,
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
INSERT INTO "new_Articulo" ("barra", "codiva", "combo", "descripcion", "descuento", "equivalente", "existencia", "grupoUnidad", "herencia", "id", "medida", "piva", "precio1", "precio2", "precio3", "tipoDescarga", "unidadGrupo") SELECT "barra", "codiva", "combo", "descripcion", "descuento", "equivalente", "existencia", "grupoUnidad", "herencia", "id", "medida", "piva", "precio1", "precio2", "precio3", "tipoDescarga", "unidadGrupo" FROM "Articulo";
DROP TABLE "Articulo";
ALTER TABLE "new_Articulo" RENAME TO "Articulo";
CREATE UNIQUE INDEX "Articulo_articulo_key" ON "Articulo"("articulo");
CREATE UNIQUE INDEX "Articulo_descripcion_key" ON "Articulo"("descripcion");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
